AFRAME.registerComponent("bowling",{
    init:function(){
     this.throwBalls()
    },
   throwBalls:function(){
    window.document.addEventListener("keydown",(e)=>{
       if (e.key === "z"){
        var ball = document.createElement("a-entity")
        ball.setAttribute("geometry",{
            primitive:"sphere",
            radius: 0.3,
            position:"1  -1 -3"
        })
        ball.setAttribute("material", {
             color: "black",
             opacity: 1
        })
      var cam =document.querySelector("#camera")
      pos = cam.getAttribute("position")
      ball.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
      ball.setAttribute("velocity", { x: 0, y: 0, z: -1 })

      var camera = document.querySelector("#camera").object3D
       var direction = new THREE.Vector3();
       console.log(direction)        
       camera.getWorldDirection(direction)
       ball.setAttribute("velocity",direction.multiplyScalar(-9))
            console.log(direction)        
       //set the velocity and it's direction
       var scene = document.querySelector("#scene");
       scene.appendChild(ball)
       }

    })

   }
})