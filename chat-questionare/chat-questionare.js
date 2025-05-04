const chatQ = document.getElementById('chat-questionare');

function createChatMessage(message, side) {
    side = side ? side : 'left';
    return `
        <div class="chat-message-container chat-message-${side}">
            <div class="chat-message-wrapper chat-message-border-radius-${side}">
                <p class="chat-questionare-message line-1 anim-typewriter">${message}</p>
            </div>
        </div>
    `;
}

function createChatChoice(options) {
    // return `
    //     <div class="chat-choice-wrapper chat-message-container">
    //         <input type="radio" name="select" id="option-1" checked>
    //         <input type="radio" name="select" id="option-2">
    //         <label for="option-1" class="option option-1">
    //             <div class="dot"></div>
    //             <span>Student</span>
    //         </label>
    //         <label for="option-2" class="option option-2">
    //             <div class="dot"></div>
    //             <span>Teacher</span>asdf
    //         </label>
    //     </div>
    // `;

    return `
        <div class="chat-choice-container">
            <div class="chat-choice-wrapper">
				${options.map((element, index) => {
					return `
						<input type="radio" name="select" id="option-${index + 1}" ${index + 1 === 1 ? 'checked' : ''}></input>
						<label for="option-${index + 1}" class="option option-${index + 1}">
							<div class="dot"></div>
							<span>${element}</span>
						</label>
					`;
				}).join('')}
            </div>
        </div>
    `;
}

function chatInit() {
    const greeting1 = 'Hark, good sir or madam!';
    const greeting2 = 'A word, if I may. You seek a path through the dense thicket of financial offerings, a bank that suits your particular needs? Fear not, for you have come to the right place!'
    const greeting3 = 'Consider me your humble guide in this endeavor. Lay before me your aspirations, your requirements, and together, we shall endeavor to unearth the most advantageous proposition.'
    const greeting4 = 'Let us commence, shall we? What manner of banking offer has captured your interest, or upon what terms do you seek to strike a bargain? Speak freely, and let us see what fortunes we might find!'

    return `
        ${createChatMessage(greeting1, 'left')}
        ${createChatMessage(greeting2, 'right')}
        ${createChatMessage(greeting3, 'left')}
        ${createChatMessage(greeting4, 'right')}
    `;
}

chatQ.innerHTML += chatInit();
chatQ.innerHTML += createChatChoice(['Test 1', 'Test 2']);