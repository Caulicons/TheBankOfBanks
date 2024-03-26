## Problems

- My first problem is that ts-node not working.
  Apparently inquirier.js has some lib that doesn't use ESmodule, instead it uses require. And that's why TS-NODE doesn't work.
  I try to reconfigure tsconfig so it works, but after a few things, I give up. TS-NODE There are a lot of problems and configuring tsconfig is quite boring, s[o use TSX. I don't need to configure anything and in the development environment tsx is working perfectly.](https://github.com/privatenumber/tsx).
  - [Ts-node not working well will node 20v](https://github.com/TypeStrong/ts-node/issues/2100). [Here too](https://www.reddit.com/r/typescript/comments/15sk2mt/tsnode_esm_typeerror_err_unknown_file_extension/).
