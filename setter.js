student={
    firstname:"Chandu",
    idno:45,
    isStudent:true,
    //Setter
    /**
     * @param {number} newid
     */
    set id(newid)
    {
        this.idno=newid;
    }
}
console.log(student.idno) //45
//changing the object property 
student.id=9;
console.log(student.idno) //9
console.log(student.isStudent)
