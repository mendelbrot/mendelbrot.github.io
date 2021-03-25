---
layout: post
title: My Tri-D Chess Rules
date: 2021-03-24 10:00 -0700
# edited: 2021-03-18 10:00 -0700
# categories: tri-d-chess
# tags: star-trek 3D-chess Tri-D-chess multi-level-chess
---

My rules are based off of the existing tri-d chess rules I introduced in my last post.  As I mentioned, I think there are areas where the game can be improved.  The plan for this post is to point out these areas with my fixes that they prompted, then talk about some other rules and ideas, and then at the end give a complete set of rules without the commentary.

## Improvement: The 2d-ness: Hook-move and imaginary squares

To summarize the current standard tri-d chess rules: pieces move as in normal chess when viewed from above, a piece can end its move on any of the squares in the column it moves to.  A path-mover is blocked by any piece in column it moves through, although it can end it's move in the column of the blocking piece. 

Note: I Used the word *column* here: I define a column as a set of squares that overlap when viewing the board from directly above.

The problem with this is that it uses a multi-level board but it's not really a 3d or multi-level game.  You could replace a column of squares with a single square that multiple pieces can occupy, and then play just the same way on a flat board.  I didn't realize this for a while, but once I did, it sunk in how silly it seems.

Looking to make rules that are more 3d, I first researched 3d chess, and I found that 3d chess itself has a few problems.  

One problem with 3d chess is, as the dimension increases, the power of path-movers vastly decreases.  For example, on a 3d grid, there's no way to force a checkmate with a king and a queen.  The queen is not able to cut off planes to force the king to the edge.  I'm actually not sure how many queens you would need to force a checkmate.

Another problem with 3d chess is distance.  Chess has a buffer of space between the two sides, so that conflict in the early game is somewhat dampened.  This allows each side to develop a formation or at least do some preparation before piece exchange starts.  A 3d chess board with dimensions 4x4x4, has the same 64 squares as a standard chess board.  If the two sides were on the top and bottom levels then, there would only be two empty squares between opposing pieces at the start.  Also, the queen would likely be able to check the opposing king on the first move.  In a 3d board, in order to have a buffer equivalent to standard chess, you would need more squares and more pawns for path blocking.  

What helped me was a book I found at the library about creatve rules for old games: [New Rules for Classic Games (1992)](https://boardgamegeek.com/boardgame/10904/new-rules-classic-games).  This book had a section about 3d chess and mentioned the checkmate problem.  In order to checkmate, with a rook for example, the rook would need to be able to cut off an entire plane.  It could do that if, as it's move, it were able to go any number of steps in one direction, and then any number of steps in an orthogonal direction.  Such a piece that combines two moves as a single move is called a *hook-mover*. 

The hook-mover concept is quite important in my Tri-d chess rules.  It combines really nicely with a feature of the geometry of the tri-d chess board.

Notice how the squares of the tri-d chess board are a subset of the squares of a 3d grid with dimensions 6x10x6 (6 wide, 10 long, and 6 high, for a total of 360 locations).  Of the locations in that grid, only 64 are actual squares on one of the tri-d chess levels.  I will call the rest of those locations imaginary squares.  In my rules, a path-mover can travel trough imaginary squares (of course it has to finish its move on an actual square).  Also, for a hook mover, the "elbow" of a hook move can be an imaginary square.  

The hook move concept applies to the bishop, rook, and queen.  The king, knight, and pawn, are so far still *column-movers*.

A *column mover* is my word for a piece that moves like in standard tri-d chess.  My strategy is currently to keep the tri-d chess rules as the baseline, and then swap them out on a piece by piece basis as I discover other interesting rules.  I swapped out the bishop, rook, and queen for their hook-moving imaginary square traveling versions.  So far the king, knight, and pawn are still column movers.

### Improvement: The pawns on the corners: Pawn drop

With the existing rules, the pawns on the outer corners of the half-levels can not advance, they can only move by capture or by moving the half-level.  My fix is a rule I call *pawn drop*.  As a move, the pawns on the two half levels can drop onto any of the eight squares of their players half of the center main board.  This area of the board for each player is their pawn drop area.  A pawn drop can only be made as a non-capturing move.



