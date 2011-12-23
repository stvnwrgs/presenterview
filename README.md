#deck.js extension presenterview

Its an extension for deck.js html5 presentation. You can use it if you want to have notes for slides that only the presentator can see.

## Dependencies (not included in this repository)

- [deck.js](https://github.com/imakewebthings/deck.js)

## Instruction

1. Copy the presenterview extension to your deck.js extensions directory
2. Include the extensions javascript at the bottom of your presentations index.html via <script src="../extensions/presenterview/deck.presenterview.js"></script>
3. Add notes as HTML commentaries to the <section>s of your presentation (<!-- commentary -->) - you may use HTML-Markup inside the commentaries if you like to
4. Open up your presentation - if the popup gets blocked, allow it and reload

The presenterview should've been opened and if the current slide has a comment, you can read your note there.

## License

Copyright (c) 2011 Steven Wirges

Dual licensed under the [MIT license](https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt) and [GPL license](https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt).