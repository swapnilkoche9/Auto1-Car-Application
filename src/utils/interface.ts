export type CarsActions = {
    addFavoriteCar: Function,
    addFavoriteCarFailure: Function,
    addFavoriteCarRequest: Function,
    addFavoriteCarSuccess: Function,
    changePageNumber: Function,
    getAllCars: Function,
    getCarsFailure: Function,
    getCarsRequest: Function,
    getCarsSuccess: Function,
    getSingleCar: Function,
    getSingleCarFailure: Function,
    getSingleCarRequest: Function,
    getSingleCarSuccess: Function,
    removeFavoriteCar: Function,
    removeFavoriteCarFailure: Function,
    removeFavoriteCarRequest: Function,
    removeFavoriteCarSuccess: Function,
}

export type Cars = {
    addingCarError: any,
    car: Car,
    carRemoved: Car,
    cars: Array<Car>,
    currentPage: number
    favoriteCars: Array<Car>,
    fetchingCarsError: any,
    fetchingSingleCarError: any,
    isAddingCar: boolean,
    isFetchingCars: boolean,
    isFetchingSingleCar: boolean,
    isRemovingCars: boolean,
    removingCarError: any,
    totalCarCount: number,
    totalPageCount: number,
    length: number,
    map: Function
}

export type Car = {
    color: string
    fuelType: string
    manufacturerName: string
    mileage: any
    modelName: string
    pictureUrl: string
    stockNumber: number
}
export type CarDetailsProps = {
    match: {
        isExact: boolean,
        params: any,
        path: string,
        url: string
    },
    carsActions: CarsActions,
    cars: Cars
}

export type ColorsAction = {
    getAllColors: Function,
    getColorsFailure: Function,
    getColorsRequest: Function,
    getColorsSuccess: Function,
}
export type ManufacturersAction = {
    getAllManufacturers: Function,
    getManufacturersFailure: Function,
    getManufacturersRequest: Function,
    getManufacturersSuccess: Function,
}

export type CarHomeProps = {
    carsActions: CarsActions,
    colorsActions: ColorsAction,
    manufacturersActions: ManufacturersAction,
    cars: any,
    manufacturers: any,
    colors: any,
    totalPageCount: number,
    isFetchingCars: boolean,
    isFetchingManufacturers: boolean,
    isFetchingColors: boolean,
    currentPage: number,
    totalCarCount: number

}
export type CarHomeState = {
    selectedColor: string,
    selectedManufacturer: string,
    selectedSortOrder: string,
    selectedPage: number
}

export type AvailableCarProps = {
    key: number
    stockNumber: number
    mileage: any
    fuelType: string
    color: string
    modelName: string
    pictureUrl: string
}

export type AvailableCarsAreaProps = {
    cars: Cars
    totalPageCount: number
    currentPage: number
    changePageNumber: Function
    totalCarCount: number
    getPageParams: Function
    getSortFilterParams: Function
}
export type ButtonProps = {
    text: string,
    handleClick: any
}
export type CarFiltersAreaProps = {
    colors: Array<String>
    manufacturers: Array<String>
    getColorsFilterParams: Function
    getManufacturersFilterParams: Function
    getFilteredCarList: Function
}

export type PaginationProps = {
    changePageNumber: Function,
    getPageParams: Function,
    currentPage: number,
    totalPageCount: number,
}

export type FilterObject = {
    label: String
    value: string
}
export type DropDownProps = {
    dropdownContent: any
    defaultDropdownValue: string
    getFilterParams: any
    dropDownLabel: string
}
export type GenericAction ={
    type:string,
    payload:any
  }