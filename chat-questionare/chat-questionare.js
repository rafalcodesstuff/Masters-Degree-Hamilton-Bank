const chatQ = document.getElementById('chat-questionare');
var isScrolledToBottom = chatQ.scrollHeight - chatQ.clientHeight <= chatQ.scrollTop + 1;

function scrollToBottom() {
	if (isScrolledToBottom) {
		chatQ.scrollTop = chatQ.scrollHeight - chatQ.clientHeight
	}
}

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

function createChatChoice(name, options) {
    return `
        <div class="chat-choice-container">
            <div class="chat-choice-wrapper">
				${options.map((element, index) => {
					return `
						<input type="radio" name="${name}" id="option-${name}-${index + 1}" value="${element}" unchecked></input>
						<label for="option-${name}-${index + 1}" class="option">
							<span>${element}</span>
						</label>
					`;
				}).join('')}
            </div>
        </div>
    `;
}

function getRadioButtonSelection(radioGroupName) {
	return new Promise((resolve) => {
		const radioButtons = document.querySelectorAll(`input[type="radio"][name="${radioGroupName}"]`);

		radioButtons.forEach(radio => radio.addEventListener('change', () => {
			const selectedValue = Array.from(radioButtons).find(radio => radio.checked)?.value;
			if (selectedValue !== undefined) {
				resolve(selectedValue);
				radioButtons.forEach((radio) => {
					radio.removeEventListener('change', () => {});
					radio.disabled = true;
				});
			}
		}));

		if (radioButtons.length === 0) {
			resolve(null);
		}
	});
}

async function awaitButtonSelection(radioGroupName) {
	return await getRadioButtonSelection(radioGroupName);
}

function chatInit() {
    return `
        ${createChatMessage('Welcome to Hamilton Bank. I am here to assist you in tailoring the best offer to your needs', 'left')}
        ${createChatMessage('Are you looking to Savings Account or Checking Account?', 'left')}
    `;
}

async function chatStart() {
	return new Promise(resolve => {
		chatQ.innerHTML += chatInit();
		chatQ.innerHTML += createChatChoice("checkingOrSaving", ['Saving Account', 'Checking Account']);
		scrollToBottom();
		resolve(awaitButtonSelection('checkingOrSaving'));
	});
}

async function afterSavingCheckingSelected(result) {
	return new Promise(resolve => {
		if (result == 'Saving Account') {
			chatQ.innerHTML += createChatMessage(`Is it important that there are no fees?`, 'left');
			chatQ.innerHTML += createChatChoice("fees", ['No Fees', 'Fees']);
			scrollToBottom();
			resolve(awaitButtonSelection('fees'));
		}
		else if (result == 'Checking Account') {
			chatQ.innerHTML += createChatMessage(`Is it important that there is no minimum deposit?`, 'left');
			chatQ.innerHTML += createChatChoice("minimumdeposit", ['No minimum deposit', 'Minimum deposit']);
			scrollToBottom();
			resolve(awaitButtonSelection('minimumdeposit'));
		}
	});
}

async function afterMinimumDeposit(result) {
	return new Promise(resolve => {
		if (result == 'No minimum deposit') {
			chatQ.innerHTML += createChatMessage(`I would prefer ${result}`, 'right');
			chatQ.innerHTML += createChatMessage(`Do you require a Personal or Business Account?`, 'left');
			chatQ.innerHTML += createChatChoice("personalOrBusiness", ['Personal', 'Business']);
			scrollToBottom();
			resolve(awaitButtonSelection('personalOrBusiness'));
		}
		else if (result == 'Minimum deposit') {
			chatQ.innerHTML += createChatMessage(`I would prefer ${result}`, 'right');
			chatQ.innerHTML += createChatMessage(`Is it important your account has multiple currencies?`, 'left');
			chatQ.innerHTML += createChatChoice("currencies", ['Yes', 'No']);
			scrollToBottom();
			resolve(awaitButtonSelection('currencies'));
		}
	});
}

async function afterBusiness() {
	return new Promise(resolve => {
		chatQ.innerHTML += createChatChoice("businesses", ['Small Business', 'Large Business', 'Non-profit']);
		scrollToBottom();
		resolve(awaitButtonSelection('businesses'));
	});
}

async function afterFees() {
	return new Promise(resolve => {
		chatQ.innerHTML += createChatChoice("age", ['Younger', 'Older']);
		scrollToBottom();
		resolve(awaitButtonSelection('age'));
	});
}

chatStart()
	.then(result => {
		chatQ.innerHTML += createChatMessage(`I would like a ${result}`, 'right');
		return afterSavingCheckingSelected(result);
	})
	.then(result => {
		if (result == 'No Fees') {
			chatQ.innerHTML += createChatMessage(`I would like ${result}`, 'right');
			chatQ.innerHTML += createChatMessage('Are you younger or older?', 'left');
			scrollToBottom();
			return afterFees();
		}
		else if (result == 'Fees') {
			chatQ.innerHTML += createChatMessage('Fees are alright', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Platinum Premier Growth Account.', 'left');
			scrollToBottom();
		}
		else if (result == 'No minimum deposit' || result == 'Minimum deposit') {
			return afterMinimumDeposit(result);
		}
	})
	.then(result => {
		if (result == 'Yes') {
			chatQ.innerHTML += createChatMessage(`${result}`, 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Foreign Currency Account.', 'left');
			scrollToBottom();
		}
		else if (result == 'No') {
			chatQ.innerHTML += createChatMessage(`I would prefer ${result}`, 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Gold Advantage Checking Plus.', 'left');
			scrollToBottom();
		}
		else if (result == 'Personal') {
			chatQ.innerHTML += createChatMessage(`I would prefer a ${result}` + ' Account', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Silver Essentials Checking or Education Savings Plus', 'left');
			scrollToBottom();
		}
		else if (result == 'Business') {
			chatQ.innerHTML += createChatMessage(`I would prefer a ${result}` + ' Account', 'right');
			chatQ.innerHTML += createChatMessage('What kind of business account do you require? Small Business, Large Business, Non-profit?', 'left');
			scrollToBottom();
			return afterBusiness(result);
		}
		else if (result == 'Younger') {
			chatQ.innerHTML += createChatMessage('I am Younger', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Education Savings Plus', 'left');
			scrollToBottom();
		}
		else if (result == 'Older') {
			chatQ.innerHTML += createChatMessage('I am Older', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Senior Savings Plus', 'left');
			scrollToBottom();
		}
	})
	.then(result => {
		if (result == 'Small Business') {
			chatQ.innerHTML += createChatMessage(`I would prefer a ${result}` + ' Account', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Small Business Builder Account', 'left');
			scrollToBottom();
		}
		else if (result == 'Large Business') {
			chatQ.innerHTML += createChatMessage(`I would prefer a ${result}` + ' Account', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Corporate Premium Account', 'left');
			scrollToBottom();
		}
		else if (result == 'Non-profit') {
			chatQ.innerHTML += createChatMessage(`I would prefer a ${result}` + ' Account', 'right');
			chatQ.innerHTML += createChatMessage('I suggest taking a look at the Nonprofit Stewardship Account', 'left');
			scrollToBottom();
		}
	})
	.catch(error => {
		console.error("Error occurred:", error);
	});