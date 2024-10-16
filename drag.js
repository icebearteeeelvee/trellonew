function addDragListeners(drag) {
    drag.onmousedown = function(event) {

        let shiftX = event.clientX - drag.getBoundingClientRect().left;
        let shiftY = event.clientY - drag.getBoundingClientRect().top;

        drag.style.position = 'absolute';
        drag.style.zIndex = 1000;

        document.body.append(drag);

        function moveAt(pageX, pageY) {
            drag.style.left = pageX - shiftX + 'px';
            drag.style.top = pageY - shiftY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        drag.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            drag.onmouseup = null;
        };
    };

    drag.ondragstart = function() {
        return false;
    };
}


document.querySelectorAll('.container').forEach(addDragListeners);
