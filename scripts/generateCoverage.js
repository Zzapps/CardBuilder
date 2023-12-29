const { readFileSync, writeFileSync } = require('fs');
const { makeBadge } = require('badge-maker');

const coverageSummaryPath = 'coverage/coverage-summary.json';
const badgeOutputPath = 'assets/coverage-badge.svg';

const rawCoverageData = readFileSync(coverageSummaryPath, 'utf8');
const coverageData = JSON.parse(rawCoverageData);
const coveragePercentage = coverageData.total.lines.pct;

const format = {
  label: 'coverage',
  message: `${coveragePercentage}%`,
  color:
    coveragePercentage > 80
      ? 'green'
      : coveragePercentage > 60
      ? 'yellow'
      : 'red',
};

const svg = makeBadge(format);
writeFileSync(badgeOutputPath, svg);
