// window class , general class you can import it and using it in another places  


export class window {

    // new window arguments 
    constructor (
        id = "defWindow" , x = 10, y = 10 , height = 512, width = 512 , 
        title = "window", focus = true , maximise = true , minimise = true
    ){
        this.id = id;
        this.x = x;
        this.y = y;

        this.height = height;
        this.width  = width;
        this.title  = title;

        // in case you want window with "maximise & minimise" buttons
        this.maximise = maximise;
        this.minimise = minimise;

        // resize object => in case you want that window to be resizable in "top down"/"right left" or all
        this.resizable = {
        td : true, // top down
        lr : true  // right left 
        };

        this.focus = focus;

        this.dom = null;
        this.css = null;

        this.show = function(){
            
            // window element
            let window = document.createElement("div");
            // set window attrs
                window.setAttribute("id" , this.id);
                window.setAttribute("class" , "window");
                
            // set window css 
                window.style.cssText = `
                    position: absolute;
                    overflow: hidden;
                    width: ${this.width}px;
                    height : ${this.height}px;
                    top: ${this.y}px;
                    left: ${this.x}px;
                    background-color : ${ (this.focus) ? this.css.window.bg_color_foucs : this.css.window.bg_color_nofoucs}
                `;
            
            // setup title bar like window above
            let titleBar = document.createElement("div");
                titleBar.setAttribute("class","window_title_bar");

                titleBar.style.cssText = `
                    position: relative;
                    width: 100%;
                    height: 5vh;
                    overflow: hidden;
                `;

                // title bar children
                titleBar.insertAdjacentHTML("beforeend",`
                    <img class="icon title_icon" src="./graphics/folder_open.png" alt="icon">
                    <p class=title> ${ this.title } </p>
                    <img class="icon minimize_button window_title_button" src="./graphics/window_close.png" alt="close">
                    ${this.maximise ? "<img class='icon minimize_button window_title_button' src='./graphics/window_max.png' alt='maximize'>" : "" }
                    ${this.minimise ? "<img class='icon minimize_button window_title_button' src='./graphics/window_min.png' alt='minimize'>" : "" }
                `)


            let container = document.createElement("div");
                container.setAttribute("class","full_container");

                container.style.cssText = `
                    position: relative;
                    width: calc(100% - 1vh * 2);
                    height: calc(100% -  ( 1vh * 2 + 5vh ));
                    left: 1vh ;
                    top : 1vh ;
                    overflow: hidden;
                    background : white;
                `;


                window.appendChild(titleBar);
                window.appendChild(container);

                if(this.resizable.lr){
                    let left = document.createElement("div");
                        left.setAttribute("class" , "window_resize lr left");
                        left.style.cssText = `
                            top   : 1vh;
                            width : 1vh;
                            height: calc(100% - 1vh*2);
                            cursor: e-resize;
                        `;

                    let right = document.createElement("div");
                        right.setAttribute("class","window_resize lr right")
                        right.style.cssText = `
                            right: 0%;
                            cursor: e-resize;
                        `;
                        
                    window.appendChild(left);
                    window.appendChild(right);
                }


                if(this.resizable.td){
                    let top = document.createElement("div");
                        top.setAttribute("class" , "window_resize td top");
                        top.style.cssText = `
                            left  : 1vh;
                            height: 1vh;
                            width : calc(100% - 1vh *2);
                            cursor: n-resize;
                            top : 0%;
                        `;

                    let down = document.createElement("div");
                        down.setAttribute("class","window_resize td down")
                
                    window.appendChild(top);
                    window.appendChild(down);
                }


                if(this.resizable.td  && this.resizable.lr){
                    let elementsPositions = ["tl","tr","dl","dr"];

                    for(let position of elementsPositions){
                        let resizeElement = document.createElement("div");
                            resizeElement.setAttribute("class","window_resize cs " + position);
                            
                            resizeElement.style.cssText = `
                                position: absolute
                                height: 1vh;
                                width : 1vh;
                                cursor: ne-resize;
                            `;
                        
                        window.appendChild(resizeElement);
                    }
                }


                this.dom = window;
                document.body.append(window);
                
            /*
            document.body.insertAdjacentHTML("beforebegin" , `
                
            <div class="window in_focus_mod" id=${this.id} 
            
            style={
                position: absolute,
                border-radius: var(--window_raduis);
                overflow: hidden;   
            }
            >
               
                <div class="window_title_bar">
                    <img class="icon title_icon" src="./graphics/folder_open.png" alt="icon">
                    <p class=title> normal window </p>
        
                    <!-- window buttons -->
                    <img class="icon minimize_button window_title_button" src="./graphics/window_close.png" alt="close">
                    <img class="icon minimize_button window_title_button" src="./graphics/window_max.png" alt="maximize">
                    <img class="icon minimize_button window_title_button" src="./graphics/window_min.png" alt="minimize">
                </div>
                
                <!-- window container who contain all window elements -->
                <div class="full_container"> </div>
        
                <!-- window hidden divs for resize -->
        
                <!-- left right -->
                <div class="window_resize lr left"> </div>
                <div class="window_resize lr right"> </div>
        
                <!-- top down -->
                <div class="window_resize td top"> </div>
                <div class="window_resize td down"> </div>
        
                <!-- corners  -->
                <div class="window_resize cs tl"> </div>
                <div class="window_resize cs tr"> </div>
                <div class="window_resize cs dl"> </div>
                <div class="window_resize cs dr"> </div>
            </div>
            
            `);
            */
        
        }

        
        }

}