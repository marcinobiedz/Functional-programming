const Iso = (to, from) => ({
    to,
    from
});

const chars = Iso(s => s.split(""), c => c.join(""));

const res = chars.from(chars.to("hello"));

const singleton = Iso(e => e.fold(() => [], x => [x]), ([x]) => x ? Right(x) : Left());

const filterEither = (e, pred) => singleton.from(singleton.to(e).filter(pred));