function calculateAge() {
    const d = document.getElementById('day').value;
    const m = document.getElementById('month').value;
    const y = document.getElementById('year').value;

    if (!d || !m || !y) {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
        return;
    }

    const birthDate = new Date(y, m - 1, d);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `${age} years old.`;
}