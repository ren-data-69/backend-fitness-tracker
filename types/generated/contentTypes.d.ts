import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    body_weights: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::body-weight.body-weight'
    >;
    goal_body_weight: Attribute.Decimal;
    barbell_bench_press: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::barbell-bench-press.barbell-bench-press'
    >;
    goal_barbell_bench_press: Attribute.Decimal;
    dumbbell_bench_press: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::dumbbell-bench-press.dumbbell-bench-press'
    >;
    goal_dumbbell_bench_press: Attribute.Decimal;
    barbell_squat: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::barbell-squat.barbell-squat'
    >;
    goal_barbell_squat: Attribute.Decimal;
    goal_incline_dumbbell_bench_press: Attribute.Decimal;
    incline_dumbbell_bench_press: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::incline-dumbbell-bench-press.incline-dumbbell-bench-press'
    >;
    seated_dumbbell_shoulder_press: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::seated-dumbbell-shoulder-press.seated-dumbbell-shoulder-press'
    >;
    goal_seated_dumbbell_shoulder_press: Attribute.Decimal;
    dumbbell_lateral_raise: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::dumbbell-lateral-raise.dumbbell-lateral-raise'
    >;
    goal_dumbbell_lateral_raise: Attribute.Decimal;
    cable_lat_pulldown: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::cable-lat-pulldown.cable-lat-pulldown'
    >;
    goal_cable_lat_pulldown: Attribute.Decimal;
    barbell_deadlift: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::barbell-deadlift.barbell-deadlift'
    >;
    goal_barbell_deadlift: Attribute.Decimal;
    barbell_bent_over_row: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::barbell-bent-over-row.barbell-bent-over-row'
    >;
    goal_barbell_bent_over_row: Attribute.Decimal;
    dumbbell_biceps_curl: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::dumbbell-biceps-curl.dumbbell-biceps-curl'
    >;
    goal_dumbbell_biceps_curl: Attribute.Decimal;
    cable_triceps_rope_pushdown: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::cable-triceps-rope-pushdown.cable-triceps-rope-pushdown'
    >;
    goal_cable_triceps_rope_pushdown: Attribute.Decimal;
    sled_leg_press: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::sled-leg-press.sled-leg-press'
    >;
    goal_sled_leg_press: Attribute.Decimal;
    push_up: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::push-up.push-up'
    >;
    goal_push_up: Attribute.Decimal;
    pull_up: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::pull-up.pull-up'
    >;
    goal_pull_up: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBarbellBenchPressBarbellBenchPress
  extends Schema.CollectionType {
  collectionName: 'barbell_bench_presses';
  info: {
    singularName: 'barbell-bench-press';
    pluralName: 'barbell-bench-presses';
    displayName: 'Barbell Bench Press';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::barbell-bench-press.barbell-bench-press',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::barbell-bench-press.barbell-bench-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::barbell-bench-press.barbell-bench-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBarbellBentOverRowBarbellBentOverRow
  extends Schema.CollectionType {
  collectionName: 'barbell_bent_over_rows';
  info: {
    singularName: 'barbell-bent-over-row';
    pluralName: 'barbell-bent-over-rows';
    displayName: 'Barbell Bent Over Row';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::barbell-bent-over-row.barbell-bent-over-row',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::barbell-bent-over-row.barbell-bent-over-row',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::barbell-bent-over-row.barbell-bent-over-row',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBarbellDeadliftBarbellDeadlift
  extends Schema.CollectionType {
  collectionName: 'barbell_deadlifts';
  info: {
    singularName: 'barbell-deadlift';
    pluralName: 'barbell-deadlifts';
    displayName: 'Barbell Deadlift';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::barbell-deadlift.barbell-deadlift',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::barbell-deadlift.barbell-deadlift',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::barbell-deadlift.barbell-deadlift',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBarbellSquatBarbellSquat extends Schema.CollectionType {
  collectionName: 'barbell_squats';
  info: {
    singularName: 'barbell-squat';
    pluralName: 'barbell-squats';
    displayName: 'Barbell Squat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::barbell-squat.barbell-squat',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::barbell-squat.barbell-squat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::barbell-squat.barbell-squat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBodyWeightBodyWeight extends Schema.CollectionType {
  collectionName: 'body_weights';
  info: {
    singularName: 'body-weight';
    pluralName: 'body-weights';
    displayName: 'Body weight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::body-weight.body-weight',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::body-weight.body-weight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::body-weight.body-weight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCableLatPulldownCableLatPulldown
  extends Schema.CollectionType {
  collectionName: 'cable_lat_pulldowns';
  info: {
    singularName: 'cable-lat-pulldown';
    pluralName: 'cable-lat-pulldowns';
    displayName: 'Cable Lat Pulldown';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::cable-lat-pulldown.cable-lat-pulldown',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cable-lat-pulldown.cable-lat-pulldown',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cable-lat-pulldown.cable-lat-pulldown',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCableTricepsRopePushdownCableTricepsRopePushdown
  extends Schema.CollectionType {
  collectionName: 'cable_triceps_rope_pushdowns';
  info: {
    singularName: 'cable-triceps-rope-pushdown';
    pluralName: 'cable-triceps-rope-pushdowns';
    displayName: 'Cable Triceps Rope Pushdown';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::cable-triceps-rope-pushdown.cable-triceps-rope-pushdown',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cable-triceps-rope-pushdown.cable-triceps-rope-pushdown',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cable-triceps-rope-pushdown.cable-triceps-rope-pushdown',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDumbbellBenchPressDumbbellBenchPress
  extends Schema.CollectionType {
  collectionName: 'dumbbell_bench_presses';
  info: {
    singularName: 'dumbbell-bench-press';
    pluralName: 'dumbbell-bench-presses';
    displayName: 'Dumbbell Bench Press';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::dumbbell-bench-press.dumbbell-bench-press',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dumbbell-bench-press.dumbbell-bench-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dumbbell-bench-press.dumbbell-bench-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDumbbellBicepsCurlDumbbellBicepsCurl
  extends Schema.CollectionType {
  collectionName: 'dumbbell_biceps_curls';
  info: {
    singularName: 'dumbbell-biceps-curl';
    pluralName: 'dumbbell-biceps-curls';
    displayName: 'Dumbbell Biceps Curl';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::dumbbell-biceps-curl.dumbbell-biceps-curl',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dumbbell-biceps-curl.dumbbell-biceps-curl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dumbbell-biceps-curl.dumbbell-biceps-curl',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDumbbellLateralRaiseDumbbellLateralRaise
  extends Schema.CollectionType {
  collectionName: 'dumbbell_lateral_raises';
  info: {
    singularName: 'dumbbell-lateral-raise';
    pluralName: 'dumbbell-lateral-raises';
    displayName: 'Dumbbell Lateral Raise';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::dumbbell-lateral-raise.dumbbell-lateral-raise',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dumbbell-lateral-raise.dumbbell-lateral-raise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dumbbell-lateral-raise.dumbbell-lateral-raise',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInclineDumbbellBenchPressInclineDumbbellBenchPress
  extends Schema.CollectionType {
  collectionName: 'incline_dumbbell_bench_presses';
  info: {
    singularName: 'incline-dumbbell-bench-press';
    pluralName: 'incline-dumbbell-bench-presses';
    displayName: 'Incline Dumbbell Bench Press';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::incline-dumbbell-bench-press.incline-dumbbell-bench-press',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::incline-dumbbell-bench-press.incline-dumbbell-bench-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::incline-dumbbell-bench-press.incline-dumbbell-bench-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPullUpPullUp extends Schema.CollectionType {
  collectionName: 'pull_ups';
  info: {
    singularName: 'pull-up';
    pluralName: 'pull-ups';
    displayName: 'Pull Up';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::pull-up.pull-up',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pull-up.pull-up',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pull-up.pull-up',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPushUpPushUp extends Schema.CollectionType {
  collectionName: 'push_ups';
  info: {
    singularName: 'push-up';
    pluralName: 'push-ups';
    displayName: 'Push Up';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::push-up.push-up',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::push-up.push-up',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::push-up.push-up',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeatedDumbbellShoulderPressSeatedDumbbellShoulderPress
  extends Schema.CollectionType {
  collectionName: 'seated_dumbbell_shoulder_presses';
  info: {
    singularName: 'seated-dumbbell-shoulder-press';
    pluralName: 'seated-dumbbell-shoulder-presses';
    displayName: 'Seated Dumbbell Shoulder Press';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::seated-dumbbell-shoulder-press.seated-dumbbell-shoulder-press',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seated-dumbbell-shoulder-press.seated-dumbbell-shoulder-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seated-dumbbell-shoulder-press.seated-dumbbell-shoulder-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSledLegPressSledLegPress extends Schema.CollectionType {
  collectionName: 'sled_leg_presses';
  info: {
    singularName: 'sled-leg-press';
    pluralName: 'sled-leg-presses';
    displayName: 'Sled Leg Press';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    weight: Attribute.Decimal & Attribute.Required;
    reps: Attribute.Integer & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    user: Attribute.Relation<
      'api::sled-leg-press.sled-leg-press',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sled-leg-press.sled-leg-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sled-leg-press.sled-leg-press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWorkoutListWorkoutList extends Schema.CollectionType {
  collectionName: 'workout_lists';
  info: {
    singularName: 'workout-list';
    pluralName: 'workout-lists';
    displayName: 'Workout List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    workoutName: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::workout-list.workout-list', 'workoutName'> &
      Attribute.Required;
    num: Attribute.Integer & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::workout-list.workout-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::workout-list.workout-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::barbell-bench-press.barbell-bench-press': ApiBarbellBenchPressBarbellBenchPress;
      'api::barbell-bent-over-row.barbell-bent-over-row': ApiBarbellBentOverRowBarbellBentOverRow;
      'api::barbell-deadlift.barbell-deadlift': ApiBarbellDeadliftBarbellDeadlift;
      'api::barbell-squat.barbell-squat': ApiBarbellSquatBarbellSquat;
      'api::body-weight.body-weight': ApiBodyWeightBodyWeight;
      'api::cable-lat-pulldown.cable-lat-pulldown': ApiCableLatPulldownCableLatPulldown;
      'api::cable-triceps-rope-pushdown.cable-triceps-rope-pushdown': ApiCableTricepsRopePushdownCableTricepsRopePushdown;
      'api::dumbbell-bench-press.dumbbell-bench-press': ApiDumbbellBenchPressDumbbellBenchPress;
      'api::dumbbell-biceps-curl.dumbbell-biceps-curl': ApiDumbbellBicepsCurlDumbbellBicepsCurl;
      'api::dumbbell-lateral-raise.dumbbell-lateral-raise': ApiDumbbellLateralRaiseDumbbellLateralRaise;
      'api::incline-dumbbell-bench-press.incline-dumbbell-bench-press': ApiInclineDumbbellBenchPressInclineDumbbellBenchPress;
      'api::pull-up.pull-up': ApiPullUpPullUp;
      'api::push-up.push-up': ApiPushUpPushUp;
      'api::seated-dumbbell-shoulder-press.seated-dumbbell-shoulder-press': ApiSeatedDumbbellShoulderPressSeatedDumbbellShoulderPress;
      'api::sled-leg-press.sled-leg-press': ApiSledLegPressSledLegPress;
      'api::workout-list.workout-list': ApiWorkoutListWorkoutList;
    }
  }
}
