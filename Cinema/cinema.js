function nextStep(stepId) {
    // Ẩn tất cả các section
    const containers = document.querySelectorAll('.step-container');
    containers.forEach(container => {
        container.classList.add('hidden');
    });

    // Hiện section được chọn
    document.getElementById(stepId).classList.remove('hidden');
    
    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
}

// Logic chọn ghế đơn giản
document.querySelectorAll('.seat:not(.occupied)').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
    });
});