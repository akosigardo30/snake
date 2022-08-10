let inputDirection = { x: 0, y: 0 }
let lastInpuntDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInpuntDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInpuntDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInpuntDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInpuntDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }

    up.addEventListener("click", () => (direction = -width));
    bottom.addEventListener("click", () => (direction = +width));
    left.addEventListener("click", () => (direction = -1));
    right.addEventListener("click", () => (direction = 1));

})



export function getInputDirection() {
    lastInpuntDirection = inputDirection
    return inputDirection
}