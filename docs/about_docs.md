---
description: Create a doc page with rich content.
tags:
  - Demo
  - test docs
---

# 关于docs

Are you ready to create the documentation site for your open source project?

## Headers

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

## Only h2 and h3 will be in the TOC by default.

You can configure the TOC heading levels either per-document or in the theme configuration.

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times



![img alt](/img/docusaurus.png)

> Easy to maintain open source documentation websites.
>
> — Docusaurus




### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>







import TestImportMarkdown from './_for_test_import.md'

<TestImportMarkdown />




## 页面导出的数据

import TOCInline from '@theme/TOCInline';
import CodeBlock from '@theme/CodeBlock';

The table of contents for this page, serialized:

<CodeBlock className="language-json">{JSON.stringify(toc, null, 2)}</CodeBlock>

The front matter of this page:

<ul>
  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}
</ul>

<p>The title of this page is: <b>{contentTitle}</b></p>




<div className="text-red-500">测试 tailwindcss</div>