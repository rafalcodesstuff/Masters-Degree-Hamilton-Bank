// https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");

var offers = {
    1 : ["Platinum Premier Growth Account", "High-yield savings with tiered interest rates (5.00% APY on first $10,000, 4.75% APY on next $20,000, 4.50% APY on balance over $30,000). This account is designed for serious savers who want to maximize their returns. A minimum daily balance of $5,000 is required to avoid a $25 monthly fee. The account includes free checks and online transfers. Consider this if you have a large amount to save and won't need frequent access to it."],
    2 : ["Gold Advantage Checking Plus", "Interest-bearing checking account (0.50% APY) with no monthly fee if you maintain a $2,500 minimum daily balance. This account is ideal for those who want the convenience of a checking account with some interest earnings. It also includes free ATM withdrawals worldwide (up to 5 per month), making it suitable for occasional travelers."],
    3 : ["Silver Essentials Checking", "Basic checking account with a low monthly fee ($5) that's waived with a direct deposit of at least $500 per month. This is a good, low-cost option for those with regular income who don't need a lot of extra features."],
    4 : ["Student Starter Account", "Checking account designed for students with no monthly fee, free online transfers, and overdraft protection (up to $100) with a linked savings account. This account helps students manage their finances without incurring fees and provides a safety net with overdraft protection."],
    5 : ["Senior Savings Plus", "Savings account for customers 65+ with a bonus interest rate (0.25% above the standard rate), no minimum balance requirement, and free quarterly paper statements. This account caters to the needs of seniors, offering a higher return and easy access to information."],
    6 : ["Small Business Builder Account", "Checking account for small business owners with tiered transaction fees (first 200 transactions free, $0.50 per transaction thereafter), free online banking, and a dedicated business support line. This account is designed to help small businesses manage their finances efficiently, with a focus on keeping transaction costs low."],
    7 : ["Corporate Premium Account", "High-volume transaction account for corporations with custom pricing based on average daily balance and transaction volume, treasury management services, and a dedicated account manager. This is for large businesses with complex financial needs, offering tailored solutions and dedicated support."],
    8 : ["Real Estate Investor Account", "Specialized account for real estate investors with escrow services, interest-bearing options for held funds, and tools for tracking multiple property transactions. This account provides the specific tools and services needed by real estate professionals."],
    9 : ["Nonprofit Stewardship Account", "Checking account for non-profit organizations with no monthly fees, low transaction fees (e.g., $0.10 per transaction over 500), and donation tracking tools. This account helps non-profits manage their funds and track donations efficiently."],
    10 : ["Global Traveler Checking", "Checking account with no foreign transaction fees, ATM fee rebates worldwide (up to $10 per withdrawal, maximum $50/month), and travel insurance benefits (requires a $1,000 minimum balance). This account is perfect for frequent international travelers."],
    11 : ["Green Savings Account", "Savings account that invests in environmentally responsible initiatives, offering a slightly lower interest rate (0.10% below the standard rate) but with the option to allocate a portion of earnings to specific green projects. This account allows you to save money while supporting environmental causes."],
    12 : ["High-Tech Banking Package", "Includes a checking account with advanced fraud protection (up to $5,000 coverage), mobile banking with biometric authentication, and a discount (15%) on personal finance software. This package is designed for tech-savvy individuals who prioritize security and convenience."],
    13 : ["Family Banking Bundle", "Package including a joint checking account, two individual savings accounts for children (with parental controls, maximum withdrawal of $200/month), and a free financial planning session (valued at $500). This bundle helps families manage their finances together and teach children about saving."],
    14 : ["Retirement Ready Account", "IRA savings account with tax-deferred growth, a range of investment options (CDs with rates from 3.00% to 4.50%, money market funds with 2.00% APY), and free consultations with a retirement specialist. This account is designed to help you save for retirement with tax advantages."],
    15 : ["Emergency Fund Builder", "High-yield savings account with limited withdrawals (no more than once per month) to encourage long-term savings, offering a bonus interest rate (0.50% above the standard rate). This account helps you build a strong emergency fund."],
    16 : ["Debt Reduction Accelerator", "Checking account with automatic transfer features to a linked high-yield savings account, designed to help customers pay down debt faster. Offers a small bonus (0.25%) if a set amount (e.g., $100/month) is transferred monthly."],
    17 : ["Homebuyer Savings Plan", "Savings account with a dedicated goal-tracking tool for saving for a down payment, offering tiered bonuses based on the percentage of the goal achieved (e.g., 0.25% bonus for reaching 50% of goal, 0.50% for 75%, 0.75% for 100%)."],
    18 : ["Education Savings Plus", "529 savings plan with tax advantages, a variety of investment options, and tools for estimating future education costs (with potential annual contribution limits of $15,000 per beneficiary)."],
    19 : ["Wealth Management Portfolio", "A suite of accounts, including a brokerage account, a high-yield savings account (with rates up to 5.25% for balances over $250,000), and a checking account, with personalized investment advice and wealth management services (requires $100,000 minimum investment)."],
    20 : ["Foreign Currency Account", "Multi-currency account allowing you to hold and manage funds in multiple currencies (USD, EUR, GBP, JPY), with competitive exchange rates (within 0.5% of market rate) and international transfer capabilities (fees may apply, e.g., $15 per transfer)."],
    21 : ["Sustainable Investment Portfolio", "A brokerage account that focuses on socially responsible investments, with options for ESG (Environmental, Social, and Governance) funds and impact investing (minimum investment of $50,000)."],
    22 : ["Premium Business Checking Pro", "A business checking account with enhanced features, including Positive Pay (daily fee of $25), ACH fraud prevention, and same-day ACH processing (fee of $10 per transaction)."],
    23 : ["Healthcare Professional Account", "A specialized account for healthcare professionals with benefits like discounted professional liability insurance (10% discount) and dedicated banking services."],
    24 : ["Freelancer Financial Hub", "An account designed for freelancers, offering tools for tracking income and expenses, estimated tax payment reminders, and discounted accounting software (30% discount on QuickBooks Self-Employed)."]
}

var modalButtons = document.getElementsByClassName("card-button");
var modalText = document.getElementById("modal-text");
var span = document.getElementsByClassName("close")[0];
var sidenav = document.getElementsByClassName("side-nav")[0];

// When the user clicks on the button, open the modal
// Array.from(modalButtons).forEach(btn => {
//     btn.onclick = function() {
//         modal.style.display = "block";
//         sidenav.style.display = "none";
    
//         // disable scrolling
//         var x=window.scrollX;
//         var y=window.scrollY;
//         window.onscroll=function(){window.scrollTo(x, y);};
//     }
// });

for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].onclick = function() {
        // disable scrolling
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};

        modal.style.display = "block";
        sidenav.style.display = "none";

        modalText.textContent = offers[i + 1];
    }    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    sidenav.style.display = "block";

    //enable scrolling
    window.onscroll=function(){};
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sidenav.style.display = "block";
    }

    //enable scrolling
    window.onscroll=function(){};
}