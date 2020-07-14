# MicroProfile Tools for Visual Studio Code

## Description

This Visual Studio Code extension provides support for [MicroProfile](https://github.com/eclipse/microprofile) development via:

 * a [MicroProfile language server](https://github.com/eclipse/lsp4mp/tree/master/microprofile.ls).
 * a [MicroProfile jdt.ls extension](https://github.com/eclipse/lsp4mp/tree/master/microprofile.jdt).

## MicroProfile `properties` Features

In `microprofile-config.properties` files, you will benefit with:

  * Completion support for MicroProfile properties
  * Hover support for MicroProfile properties
  * Validation and Quick Fix support for MicroProfile properties 
  * Outline support (flat or tree view)

## MicroProfile `Java` Features

In `Java` files, you will benefit with:

  * Completion support for MicroProfile
  * Hover support for MicroProfile
  * Validation and Quick Fix support for MicroProfile
  * Code Lens support for MicroProfile
  * Code snippets:
    * snippets for MicroProfile annotations.

## Requirements

  * Java JDK (or JRE) 8 or more recent
  * [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
  * [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)

## Supported VS Code settings

The following settings are supported:
  
TODO

### **Note for MicroProfile Rest Client properties**:

Due to [this issue](https://github.com/redhat-developer/quarkus-ls/issues/203), the MP Rest property: `<mp-rest-client-class>/mp-rest/providers/<mp-rest-provider-class>/priority` reports an unknown error. 

To avoid having this error, you must configure the following in `settings.json`:

```json
"microprofile.tools.validation.unknown.excluded": [
    "*/mp-rest/providers/*/priority"
]
```

This settings is set by default.

## Contributing

TODO

## Feedback

TODO

## License

Apache License 2.0.
See [LICENSE](LICENSE) file.
