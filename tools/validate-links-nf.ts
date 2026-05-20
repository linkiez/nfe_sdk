import {
  LINK_VALIDATION_TARGETS,
  runMarkdownLinkValidationCli,
} from './validate-links';

process.exitCode = await runMarkdownLinkValidationCli(LINK_VALIDATION_TARGETS.nf);