export function setup(element) {
    const canvas = element.querySelector('#test')
    const context = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 600
    let x = 0

    
    
    function drawRectangle() {
        context.fillStyle = 'red'
        context.fillRect(x, x, 200, 200,)

    }
    
    
    function step(timeStamp) {
        
        context.clearRect(0,0, canvas.width, canvas.height)
        drawRectangle()
        x += 1
        window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
}



