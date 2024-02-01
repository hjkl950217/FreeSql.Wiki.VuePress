import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  "/guide/": [
    {
      text: "指南",
      prefix: "/guide/",
      link: "/guide/",
      icon: "creative",
      collapsible: true,
      children: [
        {
          text: "基础文档",
          collapsible: true,
          children: [
            "",
            "getting-started",
            "install",
            "insert",
            "delete",
            "update",
            "insert-or-update",
          ],
        },
        {
          text: "查询",
          collapsible: true,
          children: [
            "select",
            "paging",
            "select-single-table",
            "select-multi-table",
            "withtempquery",
            "unionall",
            "select-group-by",
            "select-return-data",
            "select-lazy-loading",
            "select-include",
            "select-as-tree",
            "linq-to-sql",
            "withsql",
          ],
        },
        {
          text: "Repository",
          collapsible: true,
          children: [
            "repository",
            "unit-of-work",
            "cascade-saving",
            "cascade-delete",
            "unitofwork-manager",
            "aggregateroot",
          ],
        },
        {
          text: "DbContext",
          collapsible: true,
          children: ["db-context", "ifreesql-context"],
        },
        {
          text: "特别提供程序",
          collapsible: true,
          children: [
            "freesql-provider-custom",
            "freesql-provider-mysqlconnector",
            "freesql-provider-postgresql",
            "freesql-provider-sqlitecore",
            "freesql-provider-oracle",
            "freesql-provider-odbc",
            "freesql-provider-questdb",
          ],
        },
        {
          text: "扩展",
          collapsible: true,
          children: [
            "freesql-extensions-baseentity",
            "freesql-extensions-jsonmap",
            "freesqladminlte",
            "AdminBlazor",
            "lowcode",
          ],
        },
        {
          text: "CodeFirst ✨",
          collapsible: true,
          children: [
            "code-first",
            "entity-attribute",
            "fluent-api",
            "custom-attribute",
            "type-mapping",
          ],
        },
        "db-first",
        "navigate-attribute",
        "expression-function",
        "transaction",
        "filters",
        "ado",
        "aop",
        "more",
        {
          text: "高级功能",
          collapsible: true,
          children: [
            "read-write-splitting",
            "sharding",
            "multi-tenancy",
            "performance",
            "dynamic",
            "lowcode",
          ],
        },
        {
          text: "其他作品",
          collapsible: true,
          children: [
            "freeredis",
            "freescheduler",
            "freeim",
            {
              text: "More..",
              link: "otherworks",
            },
          ],
        },
      ],
    },
  ],
  "/reference/": [
    {
      text: "参考",
      collapsible: true,
      prefix: "/reference/",
      link: "/reference/api",
      icon: "plugin",
      children: [
        {
          text: "参考",
          collapsible: true,
          icon: "view",
          children: ["api", "change-log", "vs-dapper", "vs-entity-framework"],
        },
        {
          text: "学习与交流",
          collapsible: true,
          icon: "comment",
          children: ["faq", "donation", "awesome-freesql"],
        },
      ],
    },
    {
      text: "捐赠",
      collapsible: true,
      icon: "launch",
      link: "service-support",
    },
  ],
  "/extra/": [
    {
      text: "扩展指南",
      prefix: "/extra/",
      link: "/extra/",
      icon: "any",
      collapsible: true,
      children: [
        "",
        "freesql-cap",
        "idlebus-freesql",
        "iselect-depcopy",
        "freesql-auditlog",
        "freesql-docker",
        "issues-mysql5_5",
        "issues-expression-groupbysum",
      ],
    },
    {
      text: "博客",
      prefix: "/extra/",
      icon: "any",
      collapsible: true,
      children: ["aop-freesql-autofac"],
    },
  ],
});
