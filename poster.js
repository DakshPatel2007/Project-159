AFRAME.registerComponent("comic", {
    init: function () {
      this.comicContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const posterRef = [
        {
          id: "spider-man",
          title: "Spider-Man",
          url: "./Assets/spider-man.jpg",
        },
        {
          id: "batman",
          title: "Batman",
          url: "./Assets/batman.webp",
        },
  
        {
          id: "captain-america",
          title: "Captain America",
          url: "./Assets/captain-america.jpg",
        },
        {
          id: "super-man",
          title: "Super Man",
          url: "./Assets/super-man.jpeg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of posterRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 0;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
        const posterEl = this.createPoster(item)
        // Title Text Element
        const titleTextEl = this.createTitleText(position,item)
  
        borderEl.appendChild(posterEl);
        borderEl.appendChild(titleTextEl);
        this.comicContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id",id);
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        height:25,
        width:20
      });
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"white"
      });
      entityEl.setAttribute("cursor-listener",{})
      return entityEl
    
    },
    createPoster:function(item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        height:24,
        width:19
      });
      entityEl.setAttribute("material",{
        src:item.url
      })
      entityEl.setAttribute("position",{
        x:0,y:0,z:0.1
      })
      return entityEl
    },
    createTitleText:function(position,item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        color:"black",
        width:80,
        value:item.title
      });
      const positionL = position
      positionL.y = positionL.y - 30;
      entityEl.setAttribute("position",positionL)
      return entityEl
    }
    
  });
  