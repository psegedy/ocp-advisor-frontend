import React from 'react';
import { createIntl, createIntlCache } from 'react-intl';
import intlHelper from '@redhat-cloud-services/frontend-components-translations/intlHelper';

import messages from './Messages';
import { fitContent, sortable } from '@patternfly/react-table';

const cache = createIntlCache();
const locale = navigator.language.slice(0, 2);
export const intl = createIntl(
  {
    // eslint-disable-next-line no-console
    onError: console.error,
    locale,
  },
  cache
);
const intlSettings = { locale };

export const LIKELIHOOD_LABEL = {
  1: intlHelper(intl.formatMessage(messages.low), intlSettings),
  2: intlHelper(intl.formatMessage(messages.medium), intlSettings),
  3: intlHelper(intl.formatMessage(messages.high), intlSettings),
  4: intlHelper(intl.formatMessage(messages.critical), intlSettings),
};
export const IMPACT_LABEL = {
  1: intlHelper(intl.formatMessage(messages.low), intlSettings),
  2: intlHelper(intl.formatMessage(messages.medium), intlSettings),
  3: intlHelper(intl.formatMessage(messages.high), intlSettings),
  4: intlHelper(intl.formatMessage(messages.critical), intlSettings),
};
export const TOTAL_RISK_LABEL = {
  1: intlHelper(intl.formatMessage(messages.low), intlSettings),
  2: intlHelper(intl.formatMessage(messages.moderate), intlSettings),
  3: intlHelper(intl.formatMessage(messages.important), intlSettings),
  4: intlHelper(intl.formatMessage(messages.critical), intlSettings),
};
export const RISK_OF_CHANGE_LABEL = {
  1: intlHelper(intl.formatMessage(messages.veryLow), intlSettings),
  2: intlHelper(intl.formatMessage(messages.low), intlSettings),
  3: intlHelper(intl.formatMessage(messages.moderate), intlSettings),
  4: intlHelper(intl.formatMessage(messages.high), intlSettings),
};
export const RULE_CATEGORIES = {
  service_availability: 1,
  performance: 2,
  fault_tolerance: 3,
  security: 4,
  best_practice: 5,
};
export const FILTER_CATEGORIES = {
  total_risk: {
    type: 'checkbox',
    title: 'total risk',
    urlParam: 'total_risk',
    values: [
      { label: TOTAL_RISK_LABEL[4], value: '4' },
      { label: TOTAL_RISK_LABEL[3], value: '3' },
      { label: TOTAL_RISK_LABEL[2], value: '2' },
      { label: TOTAL_RISK_LABEL[1], value: '1' },
    ],
  },
  res_risk: {
    type: 'checkbox',
    title: 'risk of change',
    urlParam: 'res_risk',
    values: [
      { label: RISK_OF_CHANGE_LABEL[4], value: '4' },
      { label: RISK_OF_CHANGE_LABEL[3], value: '3' },
      { label: RISK_OF_CHANGE_LABEL[2], value: '2' },
      { label: RISK_OF_CHANGE_LABEL[1], value: '1' },
    ],
  },
  impact: {
    type: 'checkbox',
    title: 'impact',
    urlParam: 'impact',
    values: [
      { label: IMPACT_LABEL[4], value: '4' },
      { label: IMPACT_LABEL[3], value: '3' },
      { label: IMPACT_LABEL[2], value: '2' },
      { label: IMPACT_LABEL[1], value: '1' },
    ],
  },
  likelihood: {
    type: 'checkbox',
    title: 'likelihood',
    urlParam: 'likelihood',
    values: [
      { label: LIKELIHOOD_LABEL[4], value: '4' },
      { label: LIKELIHOOD_LABEL[3], value: '3' },
      { label: LIKELIHOOD_LABEL[2], value: '2' },
      { label: LIKELIHOOD_LABEL[1], value: '1' },
    ],
  },
  rule_status: {
    type: 'radio',
    title: 'status',
    urlParam: 'rule_status',
    values: [
      {
        label: intlHelper(intl.formatMessage(messages.all), intlSettings),
        value: 'all',
      },
      {
        label: intlHelper(intl.formatMessage(messages.enabled), intlSettings),
        value: 'enabled',
      },
      {
        label: intlHelper(intl.formatMessage(messages.disabled), intlSettings),
        value: 'disabled',
      },
    ],
  },
  category: {
    type: 'checkbox',
    title: 'category',
    urlParam: 'category',
    values: [
      {
        label: intlHelper(
          intl.formatMessage(messages.serviceAvailability),
          intlSettings
        ),
        value: `${RULE_CATEGORIES.service_availability}`,
      },
      {
        label: intlHelper(
          intl.formatMessage(messages.performance),
          intlSettings
        ),
        value: `${RULE_CATEGORIES.performance}`,
      },
      {
        label: intlHelper(
          intl.formatMessage(messages.faultTolerance),
          intlSettings
        ),
        value: `${RULE_CATEGORIES.fault_tolerance}`,
      },
      {
        label: intlHelper(intl.formatMessage(messages.security), intlSettings),
        value: `${RULE_CATEGORIES.security}`,
      },
      {
        label: intlHelper(
          intl.formatMessage(messages.bestPractice),
          intlSettings
        ),
        value: `${RULE_CATEGORIES.best_practice}`,
      },
    ],
  },
  impacting: {
    type: 'checkbox',
    title: 'clusters impacted',
    urlParam: 'impacting',
    values: [
      {
        label: intlHelper(intl.formatMessage(messages.oneOrMore), intlSettings),
        text: intlHelper(intl.formatMessage(messages.oneOrMore), intlSettings),
        value: 'true',
      },
      {
        label: intlHelper(intl.formatMessage(messages.none), intlSettings),
        text: intlHelper(intl.formatMessage(messages.none), intlSettings),
        value: 'false',
      },
    ],
  },
};
export const TOTAL_RISK_LABEL_LOWER = {
  1: intlHelper(intl.formatMessage(messages.low).toLowerCase(), intlSettings),
  2: intlHelper(
    intl.formatMessage(messages.moderate).toLowerCase(),
    intlSettings
  ),
  3: intlHelper(
    intl.formatMessage(messages.important).toLowerCase(),
    intlSettings
  ),
  4: intlHelper(
    intl.formatMessage(messages.critical).toLowerCase(),
    intlSettings
  ),
};
export const RECS_LIST_COLUMNS = [
  {
    title: intl.formatMessage(messages.name),
    transforms: [sortable],
  },
  {
    title: intl.formatMessage(messages.modified),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.category),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.totalRisk),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.riskOfChange),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.clusters),
    transforms: [sortable, fitContent],
  },
];
export const CLUSTER_FILTER_CATEGORIES = {
  hits: {
    type: 'checkbox',
    title: 'Total risk',
    urlParam: 'hits',
    values: [
      { label: 'All clusters', text: 'All clusters', value: 'all' },
      ...FILTER_CATEGORIES.total_risk.values,
    ],
  },
};
export const CLUSTERS_LIST_COLUMNS = [
  {
    title: intl.formatMessage(messages.name),
    transforms: [sortable],
  },
  {
    title: intl.formatMessage(messages.version),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.recommendations),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.critical),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.important),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.moderate),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.low),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.lastSeen),
    transforms: [sortable, fitContent],
  },
];
export const RECS_LIST_COLUMNS_KEYS = [
  '', // reserved for expand button
  'name',
  'modified',
  'category',
  'total_risk',
  'res_risk',
  'clusters',
];
export const CLUSTER_RULES_IMPACTED_CELL = 3;
export const RECS_LIST_NAME_CELL = 1;
export const RECS_LIST_MODIFIED_CELL = 2;
export const RECS_LIST_CATEGORY_CELL = 3;
export const RECS_LIST_TOTAL_RISK_CELL = 4;
export const RECS_LIST_RISK_OF_CHANGE_CELL = 5;
export const RECS_LIST_CLUSTERS_CELL = 6;
export const AFFECTED_CLUSTERS_NAME_CELL = 1;
export const AFFECTED_CLUSTERS_VERSION_CELL = 2;
export const AFFECTED_CLUSTERS_LAST_SEEN_CELL = 3;
export const AFFECTED_CLUSTERS_IMPACTED_CELL = 4;
export const AFFECTED_CLUSTERS_COLUMNS = [
  {
    title: intl.formatMessage(messages.name),
    transforms: [sortable],
  },
  {
    title: intl.formatMessage(messages.version),
    transforms: [sortable],
  },
  {
    title: intl.formatMessage(messages.lastSeen),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.impacted),
    transforms: [sortable, fitContent],
  },
];
// TODO: remove since unused
export const DEBOUNCE_DELAY = 600;
export const CLUSTER_RULES_COLUMNS_KEYS = [
  '', // reserved for expand button
  'description',
  'created_at',
  'impacted',
  'total_risk',
];
export const CLUSTER_RULES_COLUMNS = [
  {
    title: intl.formatMessage(messages.description),
    transforms: [sortable],
  },
  {
    title: intl.formatMessage(messages.modified),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.impacted),
    transforms: [sortable, fitContent],
  },
  {
    title: intl.formatMessage(messages.totalRisk),
    transforms: [sortable, fitContent],
  },
];
export const IMPACT_LABEL_LOWER = {
  1: intlHelper(intl.formatMessage(messages.low).toLowerCase(), intlSettings),
  2: intlHelper(
    intl.formatMessage(messages.medium).toLowerCase(),
    intlSettings
  ),
  3: intlHelper(intl.formatMessage(messages.high).toLowerCase(), intlSettings),
  4: intlHelper(
    intl.formatMessage(messages.critical).toLowerCase(),
    intlSettings
  ),
};
export const LIKELIHOOD_LABEL_LOWER = {
  1: intlHelper(intl.formatMessage(messages.low).toLowerCase(), intlSettings),
  2: intlHelper(
    intl.formatMessage(messages.medium).toLowerCase(),
    intlSettings
  ),
  3: intlHelper(intl.formatMessage(messages.high).toLowerCase(), intlSettings),
  4: intlHelper(
    intl.formatMessage(messages.critical).toLowerCase(),
    intlSettings
  ),
};
export const CLUSTERS_LIST_COLUMNS_KEYS = [
  'name',
  'version',
  'recommendations',
  'critical',
  'important',
  'moderate',
  'low',
  'last_seen',
];
export const CLUSTERS_TABLE_CELL_NAME = 0;
export const CLUSTERS_TABLE_CELL_VERSION = 1;
export const CLUSTERS_TABLE_CELL_RECOMMENDATIONS = 2;
export const CLUSTERS_TABLE_CELL_CRITICAL = 3;
export const CLUSTERS_TABLE_CELL_IMPORTANT = 4;
export const CLUSTERS_TABLE_CELL_MODERATE = 5;
export const CLUSTERS_TABLE_CELL_LOW = 6;
export const CLUSTERS_TABLE_CELL_LAST_SEEN = 7;

export const RISK_OF_CHANGE_DESC = {
  1: <span>The change poses no risk to workloads on the cluster.</span>,
  2: (
    <span>
      The change may involve voluntary disruptions. Voluntary disruptions do not
      affect cloud-native workloads. Legacy workloads may block the change or
      experience temporary downtime.
    </span>
  ),
  3: (
    <span>
      The change poses some of these risks:
      <ol>
        <li>Requires workload changes</li>
        <li>May disrupt the whole cluster if executed incorrectly</li>
        <li>
          May cause data unavailability or data loss if executed incorrectly
        </li>
      </ol>
    </span>
  ),
  4: <span>The change will require a cluster-wide outage window.</span>,
};
