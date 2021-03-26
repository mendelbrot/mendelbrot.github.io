---
layout: post
title: My Tri-D Chess Rules
date: 2021-03-24 10:00 -0700
# edited: 2021-03-18 10:00 -0700
# categories: tri-d-chess
# tags: star-trek 3D-chess Tri-D-chess multi-level-chess
---

My rules are based off of the existing tri-d chess rules I introduced in my last post.  As I mentioned, I think there are areas where the game can be improved.  The plan for this post is to point out these areas with my fixes that they prompted, and talk about some other rules and ideas.

## Stationary half-levels: Random board arrangement

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

Optional extra castling rule: If the king castles with the queen-side bishop, then that bishop and the queen will also swap places.  This is to ensure that the two bishops cover complementary squares.

## 2d / 3d movement: Hook-move and imaginary squares

To summarize the current standard tri-d chess rules: 

Pieces move as in normal chess when viewed from above.  A piece can end its move on any of the squares in the column it moves to.  (I define a *column* as a set of squares that are above / below each-other.)  A path-mover is blocked by any piece in a column it moves through, although it can end it's move in the column of the blocking piece. 

Note: I Used the word *column* here: I define a column as a set of squares that overlap when viewing the board from directly above.

The problem with this is that it uses a multi-level board but it's not really a 3d or multi-level game.  You could replace a column of squares with a single square that multiple pieces can occupy, and then play just the same way on a flat board.

To help fix this, I have been reading about other forms of 3d chess and searching for Ideas I can apply to make this game more 3d.  The hook move idea that I found in an old book by R. Wayne Schmittberger stood out as a promising avenue.  I found it at the library, and it's called [New Rules for Classic Games (1992)](https://boardgamegeek.com/boardgame/10904/new-rules-classic-games). 

This book has a section about 3d chess and mentions the checkmate problem.  In order to checkmate, with a rook for example, the rook would need to be able to cut off an entire plane.  It could do that if, as it's move, it were able to go any number of steps in one direction, and then any number of steps in an orthogonal direction.  Such a piece that combines two moves as a single move is called a *hook-mover*. This diagram illustrates the idea:

![hook move concept](/assets/images/star-trek-chess/hook-concept.svg)

The hook-mover concept combines nicely with the geometry of the tri-d chess board.

Notice how the squares of the tri-d chess board are a subset of the squares of a 3d grid with dimensions 6x10x6 (6 wide, 10 long, and 6 high, for a total of 360 locations).  Of the locations in that grid, only 64 are actual squares on one of the tri-d chess levels.  I will call the rest of those locations *imaginary squares*.  In my rules, a path-mover can travel trough imaginary squares (of course it has to finish its move on an actual square).  Also, for a hook mover, the "elbow" of a hook move can be an imaginary square.  

To illustrate this geometry, the diagram below has, on the left, a view of the board from above, and on the right, a 2d slice of the board from the side.  The corresponding levels are colour coded.  

The diagram on the right has a grid that represents the imaginary squares (it doesn't show the full 3d grid).  This diagram also shows how the main levels are two squares offset horizontally and vertically, and the half-levels are one square above their main levels.

The center main board is yellow, and in the left diagram there is a line dividing it in half.  The two halves of this board are the pawn drop areas discussed in another section.

![chess board levels](/assets/images/star-trek-chess/levels.svg)

The hook move works well for traveling between levels, but it also might make the pieces a bit too powerful.  To compensate for this, I have a rule that the path of a hook move cannot occur entirely in an x-y plane.  At least one part of the hook move must travel in a vertical direction.

Here are diagrams illustrating hook movement for the bishop and rook.  (It's difficult to display this in a nice way on a flat surface.)

| ![hook move bishop](/assets/images/star-trek-chess/hook-b.svg) | ![hook move rook](/assets/images/star-trek-chess/hook-r.svg) |

For the bishop moves, keep in mind that the half-levels are one step above the main levels they're attached to, and the second main level is two steps above the first main level. The squares in grey would be legal moves for the bishop except that they would start and end on two different half-levels (see distance considerations).

The squares in grey for the rook move would be legal except there is a block.  (a piece is in a column along the path)

The hook move concept applies to the bishop, rook, and queen.  The king, knight, and pawn, are so far still column-movers.

A *column mover* is my word for a piece that moves like in standard tri-d chess.  My strategy is currently to keep the standard tri-d chess rules as the baseline, and then swap them out on a piece by piece basis as I discover other interesting rules.

## Distance considerations

When I ran into problems with not having enough buffer between the two sides, it was actually because of the random starting positions of the half-levels.  When a player starts with a level in an advanced position, they might have an unreasonable amount of early control over squares on the other players side.  When both players have levels in advanced positions, it might be possible for pieces to capture as a first move.  Neither of these are desirable.  My fix was to create rules for moving between boards.  There are two rules.  

First, moving directly between any two different half-levels is not allowed.  

Second, the boards are divided into three areas: bottom, middle, and top.  The bottom area is the bottom main board and any half-levels connected to it.  Likewise for middle and top.  Moving directly between the bottom area and the top area is not allowed.  

## The pawns on the corners: Pawn drop

With the existing rules, the pawns on the outer corners of the half-levels can not advance, they can only move by capture or by moving the half-level.  My fix is a rule I call *pawn drop*.  As a move, the pawns on the two half levels can drop onto any of the eight squares of their player's half of the center main board.  This area of the board for each player is their pawn drop area.  A pawn drop can only be made as a non-capturing move.

I also have the rule that a pawn cannot move onto a half-level.

## Rules for playing with people

In classical chess it's taken for granted that the players can always move the pieces correctly, know when they are in check, and not move into check.  This is more problematic with a multi-level board and hook move.  Because of this I have a rule that goes as follows: if player A makes an illegal move, then after the move is complete and before making their own move, if player B calls out player A on the illegal move then player B wins the game. However if player B calls out player A for making an illegal move, and it turns out to be a legal move, then player A wins the game.  So knowing how to make a legal move is part of the game.

Along the same lines, the object is to take the king instead of checkmate.  This is because a king may be in check without either player knowing, etc...

## Another kind of multi-level game

As and alternative to hook move, or perhaps to complement it, another branch of multi-level variations to explore is pieces that move differently when they are on their own level, versus when they are moving to a different level.  I have one concrete example to explain what I mean by this.

In chess variants, a piece that moves like a king and like a knight is called a [centaur](https://en.wikipedia.org/wiki/Centaur_(chess)).  As a variant of the centaur for multi-level chess, what about a piece that moves like a king on its own level, but like a knight when jumping to a different level.  There are countless ways to modify this, maybe it would be better if it moved like a centaur on its own level and like a knight when jumping to a different level?  Using these types of fairy pieces is a completely different way of using the multi-level nature of the chess set.  The diagram on the left shows the movement of a centaur.  The diagram on the right shows a multi-level variant that moves like a king on its own level and like a knight when jumping to another level.

| ![centaur](/assets/images/star-trek-chess/centaur-2.svg) | ![multi-level-centaur](/assets/images/star-trek-chess/centaur-1.svg) |

## Shogi-style capture and drops

I play with flat pieces that are somewhat arrow shaped, and the direction the piece is pointing indicates who it belongs to.  This allows playing with the [shogi drop rules](https://en.wikipedia.org/wiki/Shogi#Drops).  This looks like a promising avenue, but I haven't done enough experimenting to say more on it yet.  

