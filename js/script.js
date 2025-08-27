//1st access the all card by class name::
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

//heart icons
const heartIcon = document.getElementsByClassName("heart-icon");

for (let heart of heartIcon){
    heart.addEventListener('click', 
        function(){
            let heartCount = parseInt(getElement("heart-number").innerText);
            
            let counting = heartCount += 1;
            getElement("heart-number").innerText = counting;
        }
    )
}

//copy buttons
const copyButton = document.getElementsByClassName("copy-btn");

for (let copyBtn of copyButton){
    copyBtn.addEventListener('click', 
        function(){
            let copyNumber = parseInt(getElement("copy-number").innerText);

            let copyCounting = copyNumber += 1;
            getElement("copy-number").innerText = copyCounting;

            //copy system
        }
    )
}


//call buttons

const callButton = document.getElementsByClassName("call-btn");

for (let callBtn of callButton){
    callBtn.addEventListener('click', 
        function(){

            //access the name and number first
            const name = callBtn.parentNode.parentNode.children[1].children[0].innerText;
            const number = callBtn.parentNode.parentNode.children[1].children[2].innerText;

            let time = new Date().toLocaleTimeString();
            
            
            //each call will cut 20 coins
            //access the coin 
            let callCost = 20;
            const coin = parseInt(getElement("coin").innerText);

            if(coin < 20){
                alert("Warning!!!.. Need More Coins for Call");
                return;
            }
            else {
                alert("calling "+name+" "+number);
            }
            let coinDecrease = coin - callCost;
            getElement("coin").innerText = coinDecrease;


            //call history section
            const callHistory = getElement("history-box");

            const newCall = document.createElement("div");
            newCall.innerHTML = `
            <div class="flex items-center justify-between shadow-lg bg-[#FAFAFA] p-4 rounded-xl mb-[10px]">
                    <div>
                        <h3 class="font-bold text-xl">${name}</h3>
                        <p class="text-[#979797]">${number}</p>
                    </div>
                    <div>
                        <h3>${time}</h3>
                    </div>
                </div>
            `

            //append kore daw
            callHistory.append(newCall);
        }
    )
}

//for clear button
document.getElementById("clear-btn").addEventListener('click', 
    function(){
        const callHistory = getElement("history-box");
        callHistory.innerHTML = "";
    }
)