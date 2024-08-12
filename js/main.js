// main.js
import { $, $$ } from './utils.js';
import { initTheme } from './theme.js';
import { initTabs } from './tabs.js';
import { initCalendar } from './calendar.js';
import { initTurmas } from './turmas.js';
import { initForms } from './forms.js';
import { initRelatorios } from './relatorios.js';

const DIAS_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let turmas = [];
let currentDate = new Date();

function init() {
    initTheme();
    initTabs();
    initCalendar(turmas, currentDate, DIAS_SEMANA);
    initTurmas(turmas);
    initForms(turmas, DIAS_SEMANA);
    initRelatorios(turmas);

    // Carregar turmas salvas
    carregarTurmas();
}

function carregarTurmas() {
    const turmasSalvas = localStorage.getItem('turmas');
    if (turmasSalvas) {
        turmas = JSON.parse(turmasSalvas);
        atualizarVisualizacoes();
    }
}

function atualizarVisualizacoes() {
    initCalendar(turmas, currentDate, DIAS_SEMANA);
    initTurmas(turmas);
}

document.addEventListener('DOMContentLoaded', init);

export { turmas, currentDate, DIAS_SEMANA, atualizarVisualizacoes };