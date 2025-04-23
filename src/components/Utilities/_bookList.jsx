import { toast } from "react-toastify";




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

const addToBookList = (docInfo) => {
    const allBookedList = getStoredBookedList();
    console.log("dovvvvvvvv----", docInfo)

    if(allBookedList.includes(docInfo.id)){
        toast.warning(`${docInfo.name}   -Appointment already exist!` );
        return;
    }
    else{
        allBookedList.push(docInfo.id);
        const bookedData = JSON.stringify(allBookedList);
        localStorage.setItem("allBook", bookedData)
        toast.success(`${docInfo.name} -Appointment BookMarked!` );
       
    }
}

const removeBookList = (id) => {
    const allBookedList = getStoredBookedList();
    alert("clickeed")
    const newAllBookedList = allBookedList.filter(allBoked=> allBoked !== id)
    const updateBookedList = JSON.stringify()
    console.log("all book lisssssst: ", allBookedList)
    console.log("all book sssst: ", newAllBookedList)

    if(allBookedList.includes(id)){
        localStorage.removeItem(id);
    }
}

export { addToBookList, getStoredBookedList, removeBookList };