const thumb = document.querySelector('.slider-thumb');
const track = document.querySelector('.slider-track');
const message = document.getElementById('message');
const unlockPosition = track.offsetWidth - thumb.offsetWidth; // End position of the slider

let isDragging = false;

thumb.addEventListener('mousedown', startDrag);
thumb.addEventListener('touchstart', startDrag);

function startDrag(e) {
    isDragging = true;
    const startX = e.clientX || e.touches[0].clientX;
    const thumbStartLeft = thumb.offsetLeft;

    function onMove(e) {
        if (isDragging) {
            const moveX = (e.clientX || e.touches[0].clientX) - startX;
            const newLeft = Math.min(Math.max(thumbStartLeft + moveX, 0), unlockPosition);
            thumb.style.left = newLeft + 'px';
        }
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);

        // Check if the thumb is at the unlock position
        if (thumb.offsetLeft >= unlockPosition) {
            message.textContent = "welcome!";
            window.location.href = "https://cchrischou.github.io/lovefornow/entry1.html"; // Redirect to the next page
        } else {
            thumb.style.left = '0px'; // Reset if not unlocked
            message.textContent = "slide to unlock";
        }
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
}
