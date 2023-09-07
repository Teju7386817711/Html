const car={
    name:"BMW",
    model:"X1",
    year:2015,
    //Get
    get Carname(){return this.name+" "+this.model;},
    /**
     * @param {string} _newmodel
     */
    set Updatemodel(_newmodel){this.model=_newmodel;}}
console.log("Using Get : ",car.Carname)
car.Updatemodel="X4";
console.log("Using Set : ",car.name,car.model)
