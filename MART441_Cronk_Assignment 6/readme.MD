Wow, so this was such a brain scratcher, but with help from you Michael in pointing me to examine some things and ChatGPT helping me sift through my code, I was finally able to get it to work!

So there was one thing that wouldn't work, and I couldn't wrap my head around it, so I removed it -- next to the attempts function, which tracked the total number of times you flipped the images, there was a successful attempts, which now that I think about it doesn't make a whole lot of sense, its not neccessary. But I could not get that to register anything other than a 0, even if you completed the game in less than 100 moves. I ended up removing that from my code, and now the attempts will show how many times you flipped the cards to win!

The form info also saves well! So when using chatGPT, I always ask to retain as much of my original code as possible. I think to start with I had made a local storage for the names and age, and kind of based my attempts thing off of that.

I found chatGPT to be extremely useful for spotting accidents in my code, such as missing brackets. I also really appreciate that when it suggests something not helpful, you can say "this didn't fix the problem -- what else could be causing it?" and chatGPT would encourage me to look at the console log and local storage for any bugs. 

Overall I'm very pleased with this -- it feels a little wonky to play the game, and isn't super polished, but I think the basic mechanics are there, and I'm very happy with that!

As a sidenote, I also used a youtube video to help me figure out how to take form data and save it to local storage!