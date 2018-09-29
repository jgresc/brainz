/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Class from '../api/class/class.model';
import Homework from '../api/homework/homework.model';
import Exercise from '../api/exercise/exercise.model';


Class.find({}).remove()
  .then(() =>{
    Class.create({
      name: 'Klasse 7a',
      level: 5,
      teacher: '573ec95972b34e3a7f070e22',
      students: [
        '573ec95972b34e3a7f070e23',
        '573ec95972b34e3a7f070e24',
        '573ec95972b34e3a7f070e25',
        '573ec95972b34e3a7f070e26',
        '573ec95972b34e3a7f070e27',
        '573ec95972b34e3a7f070e28',
        '573ec95972b34e3a7f070e29',
        '573ec95972b34e3a7f070e30',
        '573ec95972b34e3a7f070e31',
        '573ec95972b34e3a7f070e32',
        '573ec95972b34e3a7f070e33',
        '573ec95972b34e3a7f070e34']
    }).then(() => {
      console.log('finished populating classes');
    });
  });
Exercise.find({}).remove()
  .then(() => {
    Exercise.create({
      _id: '573ecb4096de95d07f349f89',
      title: 'Einleitungsvideo Koordinatensystem',
      classLevel: 7,
      subject: 'Mathematik',
      subCategory: 'Geometrie',
      difficultyLevel: 1,
      task: 'Schaue dir folgendes Video an:',
      solution: '',
      points: 100,
      mode: 'Video',
      link: 'http://www.youtube.com/watch?v=H6UgdYau1gE',
      solved: false,
      students:[
          '573ec95972b34e3a7f070e24',
          '573ec95972b34e3a7f070e25',
          '573ec95972b34e3a7f070e26',
          '573ec95972b34e3a7f070e27',
]
    },
      {
        _id: '573ecb4096de95d07f349f90',
        title: 'Grundlagen Koordinatensystem - Schatzsuche 1',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 1,
        task: 'Suche mit der Maus die Stelle (7/3) im Koordinatensystem. Was befindet sich an dieser Stelle?',
        solution: 'Krone',
        points: 100,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/kK73zynx/width/600/height/405/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto',
        solved: false,
        hint: 'Bewege das X an die gesuchte Stelle. Dabei müssen die Koordinaten wie folgt gelesen werden: (X/Y)',
        students:[
          '573ec95972b34e3a7f070e24',
          '573ec95972b34e3a7f070e25'
        ]
      },
      {
        _id: '573ecb4096de95d07f349f91',
        title: 'Grundlagen Koordinatensystem - Schatzsuche 2',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 1,
        task: 'Suche mit der Maus die Stelle (2/4) im Koordinatensystem. Was befindet sich an dieser Stelle?',
        solution: 'Diamant',
        points: 100,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/kK73zynx/width/600/height/405/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto',
        solved: false,
        hint: 'Bewege das X an die gesuchte Stelle. Dabei müssen die Koordinaten wie folgt gelesen werden: (X/Y)',
        students:[
          '573ec95972b34e3a7f070e25',
          '573ec95972b34e3a7f070e26',
          '573ec95972b34e3a7f070e27'
        ]
      },
      {
        _id: '573ecb4096de95d07f349f92',
        title: 'Distanzen messen mit dem Geodreieck',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 2,
        task: 'Benutze das Geodreieck, um den Abstand der zwei Parallelen zu ermitteln. Verschiebe hierzu die Punkte P und Q auf den Geraden. Wie viel beträgt die Distanz?',
        solution: '4.55',
        points: 200,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/mvaA0yj5/width/600/height/405/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/false/at/auto',
        solved: false,
        hint: 'Bewege das Geodreieck mit dem zentralen X an die gewünschte Stelle und rotiere es mit dem X an der Spitze. Platziere die Punkte P und Q so, dass du die gewünschte Distanz ablesen kannst.'
      },
      {
        _id: '573ecb4096de95d07f349f93',
        title: 'Volumen von Quadern 1',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 2,
        task: 'Berechne das Volumen eines Quaders mit den Massen: Höhe=3cm, Breite=7cm, Tiefe=4cm. Zur Hilfe steht dir dieser Quader. Bestimme die Grösse und fülle ihn mit "Kubikzentimeterwürfeln", indem du die orangen und roten Schieberegler verschiebst. Wie viele Kubikzentimeter beträgt das Volumen? (nur die Zahl angeben)',
        solution: '84',
        points: 200,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/uey2Cmyx/width/600/height/405/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto',
        solved: false,
        hint: 'Versuche, dich an die Volumen-Formel zu erinnern. (Grundfläche x ...).'
      },
      {
        _id: '573ecb4096de95d07f349f94',
        title: 'Volumen von Quadern 2',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 4,
        task: 'Um welchen Faktor verändert sich das Volumen eines Quaders, wenn du die Höhe verdoppelst und die Breite halbierst?',
        solution: '0',
        points: 400,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/uey2Cmyx/width/600/height/405/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto',
        solved: false,
        hint: 'Versuche, dich an die Volumen-Formel zu erinnern. (Grundfläche x ...).'
      },
      {
        _id: '573ecb4096de95d07f349f95',
        title: 'Fläche eines Parallelogramms 1',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 3,
        task: 'Wie gross ist die Fläche des Parallelogramms (ein Feld entspricht 1cmx1cm)',
        solution: '24',
        points: 300,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/fwP7tWgS/width/600/height/405/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto',
        solved: false,
        hint: 'Beobachte das Verhalten des Dreiecks. Wie viele Dreiecke passen ins Parallelogramm?'
      },
      {
        _id: '573ecb4096de95d07f349f96',
        title: 'Fläche eines Vierecks 1',
        classLevel: 7,
        subject: 'Mathematik',
        subCategory: 'Geometrie',
        difficultyLevel: 3,
        task: 'Berechne die Fläche des Vierecks. Benutze dazu die zur Verfügung stehenden Werkzeuge.',
        solution: '27.5',
        points: 300,
        mode: 'Geogebra',
        link: 'http://www.geogebra.org/material/iframe/id/jq8Axa94/width/600/height/405/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/true/stbh/true/ld/true/sri/true/at/auto',
        solved: false,
        hint: 'Ziehe Hilfslinien, um das Messen zu erleichtern.'
      })
      .then(() => {
        console.log('finished populating exercises');
      });
  });

Homework.find({}).remove()
  .then(() => {
    Homework.create({
      title: 'Geometrie 1',
      creator: '573ec95972b34e3a7f070e22',
      subject: 'Mathematik',
      subCategory: 'Geometrie',
      class: '7a', // TODO reference class model
      deadline: new Date(2016, 6, 17),
      exercises: [
        '573ecb4096de95d07f349f89',
        '573ecb4096de95d07f349f90',
        '573ecb4096de95d07f349f92'
      ],
      maxPoints: 400
    })
      .then(() => {
        console.log('finished populating homework');
      });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      _id: '573ec95972b34e3a7f070e21',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@brainz21.ch',
      password: 'admin'
    }, {
      _id: '573ec95972b34e3a7f070e22',
      provider: 'local',
      role: 'teacher',
      name: 'Lehrer Lämpel',
      email: 'lehrer.laempel@brainz21.ch',
      password: 'teacher'
    },
      // Students
      {
      _id: '573ec95972b34e3a7f070e23',
      provider: 'local',
      role: 'student',
      name: 'Max',
      email: 'max.moritz@brainz21.ch',
      password: 'student',
      totalPoints: 7500,
      solvedExercises: 32
    }, {
      _id:'573ec95972b34e3a7f070e24',
      provider: 'local',
      role: 'student',
      name: 'Hans',
      email: 'Hans@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e25',
      provider: 'local',
      role: 'student',
      name: 'Stephan',
      email: 'Stephan@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e26',
      provider: 'local',
      role: 'student',
      name: 'Lisa',
      email: 'Lisa@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e27',
      provider: 'local',
      role: 'student',
      name: 'Kevin',
      email: 'Kevin@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e28',
      provider: 'local',
      role: 'student',
      name: 'Anna',
      email: 'Anna@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e29',
      provider: 'local',
      role: 'student',
      name: 'Reto',
      email: 'Reto@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e30',
      provider: 'local',
      role: 'student',
      name: 'Vivienne',
      email: 'Vivienne@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e31',
      provider: 'local',
      role: 'student',
      name: 'Loris',
      email: 'Loris@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e32',
      provider: 'local',
      role: 'student',
      name: 'Ursina',
      email: 'Ursina@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e33',
      provider: 'local',
      role: 'student',
      name: 'Vanessa',
      email: 'Vanessa@brainz21.ch',
      password: 'student'
    }, {
      _id:'573ec95972b34e3a7f070e34',
      provider: 'local',
      role: 'student',
      name: 'Ueli',
      email: 'Ueli@brainz21.ch',
      password: 'student'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
