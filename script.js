// Wait for the HTML elements to load before executing code
document.getElementById('analyzeBtn').addEventListener('click', function() {
    
    // Get the text from the textarea
    const jobText = document.getElementById('jobDescription').value.trim().toLowerCase();
    const resultBox = document.getElementById('resultBox');
    
    // 1. Check if textarea is empty
    if (!jobText) {
        resultBox.className = "result-box warning";
        resultBox.innerHTML = "<strong>Notice:</strong> Please paste an internship description or offer letter to analyze.";
        resultBox.style.display = "block";
        return;
    }

    // 2. Scam Keyword Database
    const highRiskWords = [
        'telegram interview', 'whatsapp interview', 'deposit money', 
        'wire transfer', 'pay for equipment', 'buy gift cards', 
        'training fee', 'payment verification'
    ];
    
    const mediumRiskWords = [
        'no experience required', 'urgent hiring', 'flexible hours', 
        'work 2 hours a day', 'make quick cash', 'salary unverified'
    ];

    let scamScore = 0;

    // 3. Scan the text for matches
    highRiskWords.forEach(phrase => {
        if (jobText.includes(phrase)) {
            scamScore += 3; // Adds heavy weight to severe red flags
        }
    });

    mediumRiskWords.forEach(phrase => {
        if (jobText.includes(phrase)) {
            scamScore += 1; // Adds minor weight to vague marketing phrases
        }
    });

    // 4. Output the result based on the score calculated
    resultBox.style.display = "block";

    if (scamScore >= 3) {
        resultBox.className = "result-box danger";
        resultBox.innerHTML = "🚨 <strong>HIGH RISK DETECTED:</strong> This description looks highly suspicious. Real companies do not conduct official interviews solely over encrypted chat apps (like Telegram), nor do they ask you to pay fees or buy equipment upfront.";
    } else if (scamScore > 0 && scamScore < 3) {
        resultBox.className = "result-box warning";
        resultBox.innerHTML = "⚠️ <strong>MODERATE RISK:</strong> Found a few generic or overly urgent phrases. While it might be a standard entry-level role, proceed intentionally. Ensure the email came from a matching company domain (e.g., name@google.com, not name@gmail.com).";
    } else {
        resultBox.className = "result-box safe";
        resultBox.innerHTML = "✅ <strong>LOW RISK DETECTED:</strong> No common automated red flags were spotted! However, scammers change tactics quickly. Always ensure the job listing exists directly on the company's official 'Careers' page.";
    }
});



   
   




