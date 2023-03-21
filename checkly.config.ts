import { defineConfig } from '@checkly/cli'

const config = defineConfig({
 projectName: 'Website Monitoring',
 logicalId: 'website-monitoring-1',
 repoUrl: 'https://github.com/miliberlin/checkly-cli-test-project',
 checks: {
   activated: true,
   muted: false,
   runtimeId: '2022.10',
   frequency: 5,
   locations: ['us-east-1', 'eu-west-1'],
   tags: ['CLI'],
   alertChannels: [],
   checkMatch: '**/__checks__/*.check.ts',
   ignoreDirectoriesMatch: [],
   browserChecks: {
     frequency: 10,
     testMatch: '**/__checks__/*.spec.ts',
   },
 },
 cli: {
   runLocation: 'eu-west-1',
 }
})

export default config
