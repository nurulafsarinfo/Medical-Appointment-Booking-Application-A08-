const getStoredBookedList = () =>{
    const bookedList = localStorage.getItem("allBook");

    if(bookedList){
        const booked = JSON.parse(bookedList);
        console.log("booked data :", booked)
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

const removeBookList = (id) => {
    const allBookedList = getStoredBookedList();

    if(allBookedList.includes(id)){
        localStorage.removeItem(id);
    }
}

export { addToBookList, getStoredBookedList, removeBookList };