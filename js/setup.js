'use strict';

//Константы
const FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const NUMBER_OF_SIMILAR_WIZARDS = 4;

//Функции
/**
 * Функция возвращает случайный элемент массива
 * @param array - массив с данными
 * @return {string} - случайный элемент массива
 */
var createRandomProperty = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * создает объект волшебника
 * @constructor
 */
var Wizard = function () {
    this.name = createRandomProperty(FIRST_NAMES) + ' ' + createRandomProperty(LAST_NAMES);
    this.coatColor = createRandomProperty(COAT_COLORS);
    this.eyesColor = createRandomProperty(EYES_COLORS);
}

/**
 * Функция создает массив похожих волжебников
 * @return {[]}
 */
var createSimilarWizards = function() {
  let wizards = [];
  for (let i = 0; i < NUMBER_OF_SIMILAR_WIZARDS; i++) {
    similarWizards.push(new Wizard());
  }
  return wizards;
}

/**
 * Функция выводит разметку из template
 */
var renderSimilarWizards = function() {
  var similarWizardListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  for (let i = 0; i < NUMBER_OF_SIMILAR_WIZARDS; i++) {
    var wizardEl = similarWizardTemplate.cloneNode(true);
    wizardEl.querySelector('.setup-similar-label').textContent = similarWizards[i].name;
    wizardEl.querySelector('.wizard-coat').style.fill = similarWizards[i].coatColor;
    wizardEl.querySelector('.wizard-eyes').style.fill = similarWizards[i].eyesColor;
    similarWizardListElement.appendChild(wizardEl);
  }
}


var similarWizards = createSimilarWizards();
var setupEl = document.querySelector('.setup');
setupEl.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
renderSimilarWizards();



