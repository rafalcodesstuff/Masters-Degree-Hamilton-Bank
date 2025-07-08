var offers = {
    'Platinum Premier Growth Account' : "High-yield savings with tiered interest rates (5.00% APY on first $10,000, 4.75% APY on next $20,000, 4.50% APY on balance over $30,000). This account is designed for serious savers who want to maximize their returns. A minimum daily balance of $5,000 is required to avoid a $25 monthly fee. The account includes free checks and online transfers. Consider this if you have a large amount to save and won't need frequent access to it.",
    'Gold Advantage Checking Plus' : "Interest-bearing checking account (0.50% APY) with no monthly fee if you maintain a $2,500 minimum daily balance. This account is ideal for those who want the convenience of a checking account with some interest earnings. It also includes free ATM withdrawals worldwide (up to 5 per month), making it suitable for occasional travelers.",
    'Silver Essentials Checking' : "Basic checking account with a low monthly fee ($5) that's waived with a direct deposit of at least $500 per month. This is a good, low-cost option for those with a regular income who don't need a lot of extra features.",
    'Senior Savings Plus' : "Savings account for customers 65+ with a bonus interest rate (0.25% above the standard rate), no minimum balance requirement, and free quarterly paper statements. This account caters to the needs of seniors, offering a higher return and easy access to information. IRA savings account with tax-deferred growth, a range of investment options (CDs with rates from 3.00% to 4.50%, money market funds with 2.00% APY), and free consultations with a retirement specialist. This account is designed to help you save for retirement with tax advantages.",
    'Small Business Builder Account' : "High-volume transaction account for corporations with custom pricing based on average daily balance and transaction volume, treasury management services, and a dedicated account manager. This is for large businesses with complex financial needs, offering tailored solutions and dedicated support.",
    'Corporate Premium Account' : "High-volume transaction account for corporations with custom pricing based on average daily balance and transaction volume, treasury management services, and a dedicated account manager. This is for large businesses with complex financial needs, offering tailored solutions and dedicated support.",
    'Nonprofit Stewardship Account' : "Checking account for non-profit organizations with no monthly fees, low transaction fees (e.g., $0.10 per transaction over 500), and donation tracking tools. This account helps non-profits manage their funds and track donations efficiently.",
    'Education Savings Plus' : "529 savings plan with tax advantages, a variety of investment options, and tools for estimating future education costs (with potential annual contribution limits of $15,000 per beneficiary).",
    'Emergency Fund Builder' : "High-yield savings account with limited withdrawals (no more than once per month) to encourage long-term savings, offering a bonus interest rate (0.50% above the standard rate). This account helps you build a strong emergency fund.",
    'Retirement Ready Account' : "IRA savings account with tax-deferred growth, a range of investment options (CDs with rates from 3.00% to 4.50%, money market funds with 2.00% APY), and free consultations with a retirement specialist. This account is designed to help you save for retirement with tax advantages.",
    'Wealth Management Portfolio' : "A suite of accounts, including a brokerage account, a high-yield savings account (with rates up to 5.25% for balances over $250,000), and a checking account, with personalized investment advice and wealth management services (requires $100,000 minimum investment).",
    'Foreign Currency Account' : "Multi-currency account allowing you to hold and manage funds in multiple currencies (USD, EUR, GBP, JPY), with competitive exchange rates (within 0.5% of market rate) and international transfer capabilities (fees may apply, e.g., $15 per transfer).",
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var offer = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-header h3').text(offer);
  modal.find('.modal-body p').text(offers[offer]);
  document.body.style.paddingRight = '0px'; // fix bug with screen shifting to left
})


