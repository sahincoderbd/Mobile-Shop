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
    
    <button  data-slug="${phone.slug}"
      class="showDetails cursor-pointer inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    
    Show Details
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </button>
     <!-- Show modal -->

<div data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="static-modal hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-[#00000070]">

</div>


    </div>
    
    `


    phoneDiv.classList.add("flex", "flex-col", "justify-center", "items-center",
  "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm",
  "dark:bg-white", "dark:border-[#ddd]", "text-center");
    
phoneContainer.appendChild(phoneDiv);


});


document.querySelectorAll('.showDetails').forEach(button=>{
    button.addEventListener('click',()=>{
    const slug= button.getAttribute('data-slug');
    showDetailsHandler(slug);
    });
    
    });
console.log('data loaded and showed successfully')

spinnerLoading(false);    
}

// Show details handler slug for each element;
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

//  hide the spinner
spinnerLoading(false);


// show details function 
async function showDetailsHandler(id) {
    console.log('show details  button clicked id', id);
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone=data.data;
    console.log(phone);

    // Generate modal HTML with template string
    const getModalContainer = document.querySelector('.static-modal');

    const modalChildContainer=document.createElement('div');
   modalChildContainer.setAttribute('class','relative p-4 w-xl max-h-full');
    modalChildContainer.innerHTML = `

    <!-- Main modal  -->
       
        
        <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow-sm">
                
        <!-- Modal header -->
                <div class="flex  justify-between p-4 md:p-5">
      <div class="flex-1 
      " ><img class="mx-auto w-40" src="${phone.image}" alt=""></div>
                    <button type="button" class="close-modal transition-all cursor-pointer basis-10 text-gray-400 bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-900 dark:hover:text-white" data-modal-hide="static-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="px-4 py-2 md:p-5 space-y-4 text-left">
                     
                  <h3 class="text-3xl font-bold ">${phone.name}</h3>
  
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <!-- mobile spec -->
                    <div class="flex flex-col gap-2">

                     <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Brand :</span>  ${phone.brand}</p> 

                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Storage :</span> ${phone.mainFeatures.storage}  
                      </p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Display Size :</span>   ${phone.mainFeatures.displaySize}</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Chipset :</span> ${phone.mainFeatures.chipSet}</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Memory :</span>  ${phone.mainFeatures.memory}</p>
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Release dat3 :</span>     ${phone.releaseDate}</p>
  
                     
  
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span class="font-semibold"> GPS : </span>   ${phone.others?.['GPS']}</p>
                    </div>
                    
                </div>
                <!-- Modal footer -->
                <div class=" flex justify-end p-4 md:p-5 ">
                    <button type="button" data-modal-hide="static-modal" close-modal class="close-modal transition-all text-white bg-[#DC3545] hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#DC3545] dark:hover:bg-blue-700 cursor-pointer">Close</button>
                </div>
            </div>
        
    


`;
getModalContainer.appendChild(modalChildContainer);

 // Show modal
 getModalContainer.classList.remove('hidden');
 getModalContainer.classList.add('flex');
 document.body.style.overflow = 'hidden';

 // Add event listeners for close buttons
 getModalContainer.querySelectorAll('.close-modal').forEach(button => {
     button.addEventListener('click', () => {
         getModalContainer.classList.add('hidden');
         getModalContainer.classList.remove('flex');
         getModalContainer.innerHTML = '';
         document.body.style.overflow='';
         ;
     });
 });

 // Close modal when clicking outside
 getModalContainer.addEventListener('click', (e) => {
     if (e.target === getModalContainer) {
        getModalContainer.classList.add('hidden');
         getModalContainer.classList.remove('flex');
         getModalContainer.innerHTML = '';
         document.body.style.overflow = '';
     }
 });

 // Prevent modal from closing when clicking inside modal content
 getModalContainer.querySelector('.relative.bg-white').addEventListener('click', (e) => {
     e.stopPropagation();
 });

   
}




getMobileData();