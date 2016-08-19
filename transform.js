#!/usr/bin/env node

const through = require('through2');

const stream = through( write, end )
function write( buffer, encoding, next) {
	const txt = buffer.toString()
	const uppercase = txt.toUpperCase()
	this.push ( uppercase )
	next();
}
function end( done ) {
	done()
}

const stdin = process.stdin
const stdout = process.stdout
stdin.pipe( stream ).pipe( stdout )

