console.log("Mobile JS loaded");

const getMobileData=async(searchText='13',isShowAll)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    const phones=data.data;
    displayMobileData(phones,isShowAll);
}

const displayMobileData=(phones,isShowAll)=>{
    
    // get the parent container of phones
    const phoneContainer=document.getElementById('phones-container');
    phoneContainer.innerText="";  
    // show all button condition
    const showAllButton=document.getElementById('show-all-button');
   
    if(phones.length>12 && !isShowAll){
     showAllButton.classList.remove('hidden');
    }
    else{
        showAllButton.classList.add('hidden');
    }
    console.log("is showing all",isShowAll);

    if(!isShowAll){
        phones= phones.slice(0,12);

    }
   
    

    phones.forEach(phone => {
    
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
    
    <button 
      class=" cursor-pointer inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-target="static-modal" 
data-modal-toggle="static-modal"
onclick="showDetailsHandler('${phone.slug}')">
    
    Show Details
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </button>
     <!-- Main modal  -->
       <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <!-- Modal header -->
                <div class="flex  justify-between p-4 md:p-5">
      <div class="flex-1 
      " ><img class="mx-auto w-40" src="images/pngwing 3.png" alt=""></div>
                    <button type="button" class="basis-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="px-4 py-2 md:p-5 space-y-4">
                     
                  <h3 class="text-3xl font-bold dark:text-white">Iphone 13 Pro Max</h3>
  
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <!-- mobile spec -->
                    <div class="flex flex-col gap-2">
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Storage :</span>  128GB/256GB/1TB Storage, No card slot
                      </p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Display Size :</span>   6.7 Inches, 109.8 cm</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Chipset :</span>    Apple A15 Bionic</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Memory :</span>     128GB 6 GB RAM, 256GB RAM, 512GB RAM1 1TB 6GB RAM</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Release data :</span>     Released 2021, September 24</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Brand :</span>      Apple</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold"> GPS : </span>   Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS</p>
                    </div>
                    
                </div>
                <!-- Modal footer -->
                <div class="flex justify-end p-4 md:p-5 ">
                    <button type="button" data-modal-hide="static-modal" class="text-white bg-[#DC3545] hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#DC3545] dark:hover:bg-blue-700">Close</button>
                </div>
            </div>
        </div>
    </div>



    </div>
    
    `


    phoneDiv.classList.add("flex", "flex-col", "justify-center", "items-center",
  "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm",
  "dark:bg-white", "dark:border-[#ddd]", "text-center");
    
phoneContainer.appendChild(phoneDiv);


});
console.log('data loaded and showed successfully')

// const button = document.querySelector('#showDetailsBtn');
// button.dataset.modalTarget = 'static-modal';
// button.dataset.modalToggle = 'static-modal';

//  hide the spinner
spinnerLoading(false);

};


const searchHandle = (isShowAll)=>{

// clear the parent container
const phoneContainer=document.getElementById('phones-container');
phoneContainer.innerText="";
// get the input field
spinnerLoading(true);
const searchField=document.getElementById('search-field');
const searchText=searchField.value;
getMobileData(searchText,isShowAll);
}


const showAllHandler=()=>{
    // call the search handle function and make sure show all button clicked to get search text 
    searchHandle(true);

}

// spinner or progress function 
const spinnerLoading=(isLoading)=> {
    const spinner=document.getElementById('spinnerId');
    
    if(isLoading){
        spinner.classList.remove('hidden'); 

    }
  else{
        spinner.classList.add('hidden'); 

    }
}

// show details function 
const showDetailsHandler=async(id)=>{
console.log('show details  button clicked id',id);
const res=await fetch( ` https://openapi.programming-hero.com/api/phone/${id}`);
const data=await res.json();
console.log(data);

    // Your dynamic logic goes here (e.g. update modal content based on slug)

    
      
}




getMobileData();

