import Navbar from "../components/Navbar"
export default function SFML() {
    return(
        <>
            <Navbar/>
            <div className="w-full text-center font-bold text-4xl py-5">SFML Games and Applications</div>
            <div className="px-3 md:px-10 justify-center w-full py-5">
                <div className="content">
                    <div className="text-2xl font-semibold">Minesweeper</div>
                    <div className="h-1 my-1 bg-gray-600"></div>
                    <div>I first started using SFML for an introductory programming class. We had to create minesweeper using given sprites and a fixed set of instructions for what the intended program should do. As expected, clicking a tile started a rescursive function that would reveal all surrounding tiles until the game was won or until it came across a tile that was a bomb and stopped before hitting it. The game also allowed users to place flags and created a new board every time the user won or lost. </div>
                    <div className="my-5">The premise was simple enough, but as new programmer, I struggled with the logic and found myself spending more time staring at code than writing it. Over the course of this project though, I had to learn the importance of reading documentation and better testing of projects. In the end, the project worked well, but I was left wanting to try other projects on my own after I was done.</div>
                    <div className="py-5 flex justify-center h-fit"><img className="w-[80%] sm:w-[60%] md:w-[40%]" src="/images/minesweeper.png"></img></div>
                    <div className="pt-5 text-2xl font-semibold">Sudoku</div>
                    <div className="h-1 my-1 bg-gray-600"></div>
                    <div>I took a break to do other classes, but eventually came back to doing more SFML and the first project I tackled was Sudoku. I was quite into playing at the time and thought that sudoku seemed easy enough graphics wise to build. It requires a grid which I built lines and then each square contains a space for pencil marked numbers. The overall design and creation was fairly easy and the hard part was the solve sudoku button. It was once again a recursion problem that required checking all possible combinations and then returning the user with feedback. This was overall good as I was at this point better at programming and I corrected a lot of errors that made minesweeper much harder than it should've been.</div>
                    <div className="py-5 flex justify-center h-fit"><img className="w-[80%] sm:w-[60%] md:w-[40%]" src="/images/sudoku.png"></img></div>
                    <div className="pt-5 text-2xl font-semibold">Tetris</div>
                    <div className="h-1 my-1 bg-gray-600"></div>
                    <div>After working on smaller projects like snake and a very simple sidescroller game, I decided to work on tetris. This is where I first started to really have to experiment with falling animations which I later used for my piano. I wanted to recreate standard tetris so I started off with creating a grid system for where the shapes should fall to and also creating custom sprites with the tetris shapes. The falling iteself was not too hard, I used a timer funtion and every second, the pieces fall until they collide with the pieces at the bottom. After a certain time, the pieces start to fall faster and faster.</div>
                    <div className="py-5">The real challenge of this project was the piece rotations and the collision detection. There are predefined rules for the axis of rotations for each piece and thus actual calculations had to go into figuring out how to redesign the already designed pieces such that they could be rotated in a particular way. Once that was working, the collsion detected stopped working. If a piece was rotated while falling and happened to hit other pieces just right, the whole program would crash. It took several days to resolve this, but after this was fixed and some music was added, I had a result I was happy with.</div>
                    <div className="py-5 flex justify-center h-fit"><img className="w-[80%] sm:w-[60%] md:w-[40%]" src="/images/tetris.png"></img></div>
                    <div className="pt-5 text-2xl font-semibold">Sorting Algorithms</div>
                    <div className="h-1 my-1 bg-gray-600"></div>
                    <div>The next thing I made of note was a sorting algorithm visualizer. This has been done a lot, but I wanted to try it myself. I was considering being a TA at this time and thought it would be a cool way to teach students about sorting algorithms and also about SFML. The program allows users to change the number of elements and choose between a set of a few sorts. I did do more sorts than are shown, but they are not displayed in the image below.</div>
                    <div className="py-5 flex justify-center h-fit"><img className="w-[80%] sm:w-[60%] md:w-[40%]" src="/images/sorts.png"></img></div>
                    <div className="pt-5 text-2xl font-semibold">Piano</div>
                    <div className="h-1 my-1 bg-gray-600"></div>
                    <div>This is by far the most I had ever spent on a project at this point. The goal was to create a piano visualization tool similar to synthesia where users can see the actual notes falling down and hear the music as it plays. I had already acquired the skills to do most of the graphis part but I still found the actual design difficult. To begin, the piano itself underwent several iterations for how they keys were stored and how to know which one is being referenced. This part, although somewhat hard at the time, was much easier than the issues I soon faced. </div>
                    <div className="pt-5">Up to this point, I was trying to do something different. I was using something called MusicXML which is a markup language to show the notes position as sheet music. I wanted to try and use this to determine what note was played when based on its heigth and dimensions relative to the sheet music. This ended up being a horrible idea and after several weeks of little progress, I had to pivot.</div>
                    <div className="pt-5">At this point, I finally made the transition over to using Midi files. I looked through several libraries until I found one I liked that converted midifiles to specific key number which I could then translate to a key number in my program. Revising my code took around another week to get working and from there I spent another few weeks making changes to the GUI of the program. This included the falling notes and pressed notes, the music sync with the notes, and mouse inputs to allow for fast forwarding, skipping pieces, and pausing. The color scheme was made better and some other smaller changes created something I am very proud of. There are still some small bugs like longer pieces going out of sync after around 10 minutes of play time and phantom notes that seem to be around 30 seconds long that appear to be a bug with the library I am using. Other than that, I was pleased with the final culmination of all other projects before into this.</div>
                    <div className="py-5 flex justify-center h-fit"><iframe width="560" height="315" src="https://www.youtube.com/embed/dlsCJ1E4_k8?si=7GvX69uYLb349pqK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>

                </div>
            </div>
        </>
    )
} 