import {
  LINK_VALIDATION_TARGETS,
  runMarkdownLinkValidationCli,
} from './validate-links';

process.exitCode = await runMarkdownLinkValidationCli(LINK_VALIDATION_TARGETS.custom, {
  successMessage: 'No broken internal links found in specified files.',
});