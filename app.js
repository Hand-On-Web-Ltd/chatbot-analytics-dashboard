document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('sample-data.json');
    const data = await res.json();

    // Summary cards
    document.getElementById('totalConversations').textContent = data.summary.totalConversations.toLocaleString();
    document.getElementById('avgResponseTime').textContent = data.summary.avgResponseTime + 's';
    document.getElementById('satisfactionScore').textContent = data.summary.satisfactionScore + '/5';
    document.getElementById('conversionRate').textContent = data.summary.conversionRate + '%';

    // Messages per day chart
    const ctx = document.getElementById('messagesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.messagesPerDay.map(d => {
                const date = new Date(d.date);
                return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
            }),
            datasets: [{
                label: 'Messages',
                data: data.messagesPerDay.map(d => d.count),
                borderColor: '#58a6ff',
                backgroundColor: 'rgba(88, 166, 255, 0.1)',
                fill: true,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: '#58a6ff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { color: '#8b949e' },
                    grid: { color: '#21262d' }
                },
                y: {
                    ticks: { color: '#8b949e' },
                    grid: { color: '#21262d' }
                }
            }
        }
    });

    // Top questions table
    const tbody = document.getElementById('questionsTable');
    data.topQuestions.forEach((q, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${q.question}</td>
            <td>${q.count}</td>
            <td class="${q.answered ? 'status-answered' : 'status-unanswered'}">
                ${q.answered ? '✓ Answered' : '✗ Needs answer'}
            </td>
        `;
        tbody.appendChild(row);
    });
});
