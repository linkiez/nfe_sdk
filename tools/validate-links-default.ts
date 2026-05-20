import {
  LINK_VALIDATION_TARGETS,
  runMarkdownLinkValidationCli,
} from './validate-links';

process.exitCode = await runMarkdownLinkValidationCli(LINK_VALIDATION_TARGETS.default, {
  successMessage: 'No broken internal links found in specified files.',
});