---
layout: post
title: My Tri-D Chess Rules
date: 2021-03-24 10:00 -0700
# edited: 2021-03-18 10:00 -0700
# categories: tri-d-chess
# tags: star-trek 3D-chess Tri-D-chess multi-level-chess
---

My rules are based off of the existing tri-d chess rules I introduced in my last post.  As I mentioned, I think there are areas where the game can be improved.  The plan for this post is to point out these areas with my fixes that they prompted, and talk about some other rules and ideas.

## Improvement: Stationary half-levels: Random board arrangement

Recall for standard tri-d chess that the attack boards (which I call *half-levels*) can move and invert.  

Regarding the inverting, I do not understand how inverting the attack board would make a difference with the standard tri-d chess rules.  Also, building a chess set where these boards invert and are easy to move is a lot more restrictive then building a set where they are simply easy to move.  Considering this, I drop the inverting boards altogether.

I also prefer not to move the half-levels during the game.  I find it's awkward to pick up a board and the piece on it while trying not to knock anything over.  For me I don't find that it really adds very much to the game.  The one thing that it does add is all the different positions the boards can be in.  

Instead of moving the half-levels, what I do is, I make the locations of the half-levels matter a lot, because they set the starting position of the game.  The half-levels are in random locations at the start of the game, and the player who moves second gets to choose which side of the board they will play from.  

I don't put the half-levels in any random positions, I have a fairly detailed way of selecting the random placement so it is balanced and doesn't give either player too much advantage.

There are twelve half-level locations, three in each quadrant of the board.  Each of these sets of three locations I call a *triad*.  Each player has two triads on their side of the board.  

This is how the half-levels are placed:  One one side of the board, randomly place a half-level on any of the three spots on one of the triads.  Then place a half-level on a spot on the other triad: this time, randomly choose between the two spots that do not correspond to the one that was chosen on the first triad.  Repeat this process on the other side of the board.  The total number of random starting positions is `3*2*3*2 = 36`.  In contrast, the total number of ways to place the levels with no restrictions is `C(12,4) = 495`.

## Starting piece arrangement and castling

My starting arrangement is slightly different than standard tri-d chess.  It's depicted below. 

![setup diagram](/assets/images/star-trek-chess/setup-diagram.svg)

The pieces in the diagram are from [this source](https://commons.wikimedia.org/wiki/File:Chess_Pieces_Sprite.svg#/media/File:Chess_Pieces_Sprite.svg). I have modified them. [This is a bit of a digression, for tri-d chess I use flat pieces that I have laser cut / engraved out of 1/4" plywood.  I prefer flat pieces because they don't fall over, they are easier to move on the board, and there is no height constraint in designing the board to accommodate the king height (tournament standard is 3 3/4", or 9.5cm).  The pieces are all the same colour but the direction that the piece is pointing indicates the owner.  These are [Shogi](https://en.wikipedia.org/wiki/Shogi) style pieces that allow experimenting with Shogi capture rules.]

My castling rule is, the king can swap places with any other piece.  Castling can only be done as the first move of the game.  

If the king castles with the queen-side bishop, then that bishop and the queen will also swap places.  This is to ensure that the two bishops cover complementary squares.

## Improvement: 2d / 3d movement: Hook-move and imaginary squares

To summarize the current standard tri-d chess rules: pieces move as in normal chess when viewed from above, a piece can end its move on any of the squares in the column it moves to.  A path-mover is blocked by any piece in column it moves through, although it can end it's move in the column of the blocking piece. 

Note: I Used the word *column* here: I define a column as a set of squares that overlap when viewing the board from directly above.

The problem with this is that it uses a multi-level board but it's not really a 3d or multi-level game.  You could replace a column of squares with a single square that multiple pieces can occupy, and then play just the same way on a flat board.  I didn't realize this for a while, but once I did, it sunk in how silly it seems.

Looking to make rules that are more 3d, I first researched 3d chess, and I found that 3d chess itself has a few problems.  

One problem with 3d chess is, as the dimension increases, the power of path-movers vastly decreases.  For example, on a 3d grid, there's no way to force a checkmate with a king and a queen.  The queen is not able to cut off planes to force the king to the edge.

Another problem with 3d chess is distance.  Chess has a buffer of space between the two sides, so that conflict in the early game is somewhat dampened.  This allows each side to develop a formation or at least do some preparation before piece exchange starts.  A 3d chess board with dimensions 4x4x4, has the same 64 squares as a standard chess board.  If the two sides were on the top and bottom levels, then there would only be two empty squares between opposing pieces at the start.  Also, the queen would likely be able to check the opposing king on the first move.  In a 3d board, in order to have a buffer equivalent to standard chess, you would need more squares and more pawns for path blocking.  

What helped me was a book I found at the library about creative rules for old games: [New Rules for Classic Games (1992)](https://boardgamegeek.com/boardgame/10904/new-rules-classic-games).  This book has a section about 3d chess and mentions the checkmate problem.  In order to checkmate, with a rook for example, the rook would need to be able to cut off an entire plane.  It could do that if, as it's move, it were able to go any number of steps in one direction, and then any number of steps in an orthogonal direction.  Such a piece that combines two moves as a single move is called a *hook-mover*. 

The hook-mover concept is combines really nicely with the geometry of the tri-d chess board.

Notice how the squares of the tri-d chess board are a subset of the squares of a 3d grid with dimensions 6x10x6 (6 wide, 10 long, and 6 high, for a total of 360 locations).  Of the locations in that grid, only 64 are actual squares on one of the tri-d chess levels.  I will call the rest of those locations *imaginary squares*.  In my rules, a path-mover can travel trough imaginary squares (of course it has to finish its move on an actual square).  Also, for a hook mover, the "elbow" of a hook move can be an imaginary square.  

The hook move works well for traveling between levels, but it also makes the pieces a bit too powerful.  To compensate for this, a hook-move cannot start and end on the same level.  With the rook for example, on its own level in moves like a regular rook, when traveling between levels it can make a rook move up or down, or make a hook move.

Another way of saying this is, hook moves are legal in the x-z and y-z planes, but not in the x-y plane.

Here are diagrams illustrating hook movement for the bishop and rook.  (It's difficult to display this in a nice way on a flat surface.)

| ![hook move bishop](/assets/images/star-trek-chess/hook-b.svg) | ![hook move rook](/assets/images/star-trek-chess/hook-r.svg) |

For the bishop moves, keep in mind that the half-levels are one step above the main levels they're attached to, and the second main level is two steps above the first main level. The squares in grey would be legal moves for the bishop except that they would start and end on two different half-levels (see distance considerations).

The squares in grey for the rook move would be legal except there is a block.  (a piece is in a column along the path)

The hook move concept applies to the bishop, rook, and queen.  The king, knight, and pawn, are so far still *column-movers*.

A *column mover* is my word for a piece that moves like in standard tri-d chess.  My strategy is currently to keep the standard tri-d chess rules as the baseline, and then swap them out on a piece by piece basis as I discover other interesting rules.

## Distance considerations

Designing a 3d chess game requires careful consideration about distance and separation between the two sides.  The geometry of tri-d chess turns out to work fairly well in this regard because the main boards are offset by two squares and not directly above each-other.  This naturally creates more separation.  

When I ran into problems with distance it was actually because of the random starting positions with the half-levels.  When a player starts with a level in an advanced position, they might have an unreasonable amount of early control over squares on the other players side.  When both players have levels in advanced positions, it might be possible for pieces to capture as a first move.  Neither of these are desirable.  My fix was to create rules for moving between boards.  There are two rules.  

First, moving directly between any two different half-levels is not allowed.  

Second, the boards are divided into three areas: bottom, middle, and top.  The bottom area is the bottom main board and any half-levels connected to it.  Likewise for middle and top.  Moving directly between the bottom area and the top area is not allowed.  

## Improvement: The pawns on the corners: Pawn drop

With the existing rules, the pawns on the outer corners of the half-levels can not advance, they can only move by capture or by moving the half-level.  My fix is a rule I call *pawn drop*.  As a move, the pawns on the two half levels can drop onto any of the eight squares of their player's half of the center main board.  This area of the board for each player is their pawn drop area.  A pawn drop can only be made as a non-capturing move.

I also have the rule that a pawn cannot move onto a half-level.





## Other Ideas

