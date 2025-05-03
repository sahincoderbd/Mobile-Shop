console.log("Mobile JS loaded");

const getMobileData=async(searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    const phones=data.data;
    displayMobileData(phones);
}

const displayMobileData=(phones)=>{
    
    // get the parent container of phones
    const phoneContainer=document.getElementById('phones-container');
    phoneContainer.innerText="";  
    // show all button condition
    const showAllButton=document.getElementById('show-all-button');

    if(phones.length>12){
     showAllButton.classList.remove('hidden');
    }
    else{
        showAllButton.classList.add('hidden');
    }
    
   phones= phones.slice(0,12);
    
    phones.forEach(phone => {
    console.log(phone);
    const phoneDiv=document.createElement('div');
    phoneDiv.innerHTML=`
    
    <a class=" pt-5" href="#">
    <img class="rounded-t-lg align-middle" src="${phone.image}">
    </a>
    <div class="p-5">
    <a href="#">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${phone.phone_name} x</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">There are many variations of passages of available, but the majority have suffered</p>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">$999</h5>
    
    <a href="#" class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    
    Show Details
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </a>
    </div>
    
    `
    phoneDiv.classList.add("flex", "flex-col", "justify-center", "items-center",
  "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm",
  "dark:bg-white", "dark:border-[#ddd]", "text-center");
    
phoneContainer.appendChild(phoneDiv);

});


//  hide the spinner
spinnerLoading(false);

}
const searchHandle = ()=>{

// clear the parent container
const phoneContainer=document.getElementById('phones-container');
phoneContainer.innerText="";
// get the input field
spinnerLoading(true);
const searchField=document.getElementById('search-field');
const searchText=searchField.value;
getMobileData(searchText);
}

const spinnerLoading=(isLoading)=> {
    const spinner=document.getElementById('spinnerId');
    
    if(isLoading){
        spinner.classList.remove('hidden'); 

    }
  else{
        spinner.classList.add('hidden'); 

    }
}



