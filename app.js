let values = []

let width = 800;
let height = 600;

function setup()
{   
    frameRate(60);
    createCanvas(800,600);
    values = new Array(width);
    //console.log(values.length);
    for(i = 0 ;i<values.length;i++)
    {
        values[i]=random(height);
    }    
    //noLoop();
}

function bubbleSort(values)
{
 
    for(let i = 0 ; i<values.length;i++)
    {
        for(let j = 0;j<values.length-i-1;j++)
        {
            let a = values[j];
            let b = values[j+1];
            if(a>b)
            {
                ////console.log(a,b)
                swap(values,j,j+1);
            }
        }
    }
}

function swap(values,a,b)
{
    
    let temp = values[a];
    values[a]=values[b];
    values[b]=temp;
    
}


let fir = 0;
let sec = 0;
function draw()
{
    background(0);
    

    if(fir < values.length)
    {
        
        for(let sec = 0;sec<values.length-fir-1;sec++)
        {
            //console.log(sec)
            let a = values[sec];
            let b = values[sec+1];
            if(a>b)
            {
                //console.log(a)
                swap(values,sec,sec+1);
            }
        }
        fir++;        
    }
    else
    {
        //console.log(values)
        console.log("finished")
        noLoop();
    }


   



    for(i=0;i<values.length;i++)
    {
        
        stroke(255);        
        line(i,height,i,height-values[i]);
        ////console.log(values[i]);

    }
    
    
}
