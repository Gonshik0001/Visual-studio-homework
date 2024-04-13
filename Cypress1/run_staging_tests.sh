#!/bin/bash

# Установка переменных окружения для запуска тестов на стейджинге
export CYPRESS_CONFIG_FILE=cypress.staging.json

# Запуск тестов
npx cypress run

# Сброс переменной окружения после выполнения тестов
unset CYPRESS_CONFIG_FILE
