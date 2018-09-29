/**
 * Class model events
 */

'use strict';

import {EventEmitter} from 'events';
import Class from './class.model';
var ClassEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClassEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Class.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ClassEvents.emit(event + ':' + doc._id, doc);
    ClassEvents.emit(event, doc);
  }
}

export default ClassEvents;
