#!/usr/bin/env node

const { Command } = require("commander");
const createProject = require("../lib/createProject");

const program = new Command();

program
  .name("sr-cli")
  .description("Spring Boot + React project generator")
  .version("1.0.0");

program
  .command("init <project-name>")
  .description("Create a new full-stack project")
  .action(createProject);

program.parse();
