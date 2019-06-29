import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as carsActions from '../actions/cars'
import * as colorsActions from '../actions/colors'
import * as manufacturersActions from '../actions/manufacturers'
import constants from '../constants/SystemConstants'
import { CarHomeProps, CarHomeState, FilterObject } from '../utils/interface'
import { Suspense, lazy } from 'react';

const AvailableCarsArea = lazy(() => import('../components/AvailableCarsArea'));
const CarFiltersArea = lazy(() => import('../components/CarFiltersArea'));
const Loading = lazy(() => import('../components/Loading'));
let selectedColorValue: string = ''
let selectedManufacturerValue: string = ''

class CarHome extends React.Component<CarHomeProps, CarHomeState>{
  constructor(props: CarHomeProps) {
    super(props)
    this.state = {
      selectedColor: '',
      selectedManufacturer: '',
      selectedSortOrder: constants.NONE_SORT_ORDER,
      selectedPage: 1,
    }
  }

  componentDidMount() {
    this.props.carsActions.getAllCars()
    this.props.colorsActions.getAllColors()
    this.props.manufacturersActions.getAllManufacturers()
  }
  componentDidUpdate({ }, prevState: CarHomeState) {
    if (prevState.selectedPage !== this.state.selectedPage) {
      this.getFilteredCarList()
    }
  }


  getSortFilterParams = (sortOrder: FilterObject) => {

    this.setState({ selectedSortOrder: sortOrder.value }, () => {
      this.getFilteredCarList()
    })
  }

  getPageParams = (page: number) => {
    this.setState({ selectedPage: page })
  }

  getColorsFilterParams = (color: FilterObject) => {
    selectedColorValue = color.value
  }

  getManufacturersFilterParams = (manufacturer: FilterObject) => {
    selectedManufacturerValue = manufacturer.value
  }

  formatDropdownData = (manufacturer: any) => {
    let formattedData = []
    if (manufacturer.length > 0) {
      formattedData = manufacturer.map((member: any) => member.name)
    }
    return formattedData
  }

  filterOnColorAndManufacturer = () => {
    this.setState({ selectedColor: selectedColorValue, selectedManufacturer: selectedManufacturerValue }, () => {
      this.getFilteredCarList()
    })
  }

  getFilteredCarList = () => {
    let {
      selectedColor,
      selectedManufacturer,
      selectedSortOrder,
      selectedPage
    } = this.state

    if (selectedSortOrder === constants.NONE_SORT_ORDER) {
      selectedSortOrder = ''
    }

    if (selectedSortOrder === constants.ASC_SORT_ORDER) {
      selectedSortOrder = constants.ASC_TEXT
    }

    if (selectedSortOrder === constants.DES_SORT_ORDER) {
      selectedSortOrder = constants.DES_TEXT
    }

    this.props.carsActions.getAllCars({
      manufacturer: selectedManufacturer,
      color: selectedColor,
      sort: selectedSortOrder,
      page: selectedPage
    })
  }

  render() {
    const {
      cars,
      manufacturers,
      colors,
      totalPageCount,
      isFetchingCars,
      isFetchingManufacturers,
      isFetchingColors,
      currentPage,
      totalCarCount
    } = this.props

    return (
      <div className='container-wrapper'>
        {!isFetchingCars && !isFetchingManufacturers && !isFetchingColors ? <div className='container'>
          {colors && manufacturers && colors.length > 0 && manufacturers.length > 0 ?
            <Suspense fallback={<div />}>
              <CarFiltersArea
                colors={colors}
                manufacturers={this.formatDropdownData(manufacturers)}
                getColorsFilterParams={this.getColorsFilterParams}
                getFilteredCarList={this.filterOnColorAndManufacturer}
                getManufacturersFilterParams={this.getManufacturersFilterParams}
              />
            </Suspense>
            : <div />}

          {cars && cars.length > 0 ?
            <Suspense fallback={<Loading />}>
              <AvailableCarsArea
                cars={cars}
                totalPageCount={totalPageCount}
                getSortFilterParams={this.getSortFilterParams}
                getPageParams={this.getPageParams}
                currentPage={currentPage}
                changePageNumber={this.props.carsActions.changePageNumber}
                totalCarCount={totalCarCount}
              />
            </Suspense>
            :
            <Suspense fallback={<div />}><Loading /></Suspense>}
        </div> : <div />}
      </div>
    )
  }
}

const mapStateToProps = (state: CarHomeProps) => {
  return {
    cars: state.cars.cars,
    totalPageCount: state.cars.totalPageCount,
    currentPage: state.cars.currentPage,
    colors: state.colors.colors,
    manufacturers: state.manufacturers.manufacturers,
    totalCarCount: state.cars.totalCarCount,
    isFetchingCars: state.cars.isFetchingCars,
    isFetchingColors: state.colors.isFetchingColors,
    isFetchingManufacturers: state.manufacturers.isFetchingManufacturers,

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    carsActions: bindActionCreators(carsActions, dispatch),
    colorsActions: bindActionCreators(colorsActions, dispatch),
    manufacturersActions: bindActionCreators(manufacturersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarHome)
