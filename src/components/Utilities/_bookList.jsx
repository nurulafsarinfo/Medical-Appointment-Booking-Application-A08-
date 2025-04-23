const getStoredBookedList = () =>{
    const bookedList = localStorage.getItem("allBook");

    if(bookedList){
        const booked = JSON.parse(bookedList);
        return booked;
    }
    else{
        return [];
    }
}

const addToBookList = (id) => {
    const allBookedList = getStoredBookedList();

    if(allBookedList.includes(id)){
        alert("This is exist");
    }
    else{
        allBookedList.push(id);
        const bookedData = JSON.stringify(allBookedList);

        localStorage.setItem("allBook", bookedData)
    }
}

export { addToBookList };