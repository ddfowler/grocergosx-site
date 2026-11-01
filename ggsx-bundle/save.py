import json,sys
f=sys.argv[1]
data=json.loads(open(f).read())
for e in data:
    with open(f"src/{e['id']}.html",'w') as fh: fh.write(e['html'])
    with open(f"src/{e['id']}.json",'w') as fh: json.dump({k:e[k] for k in e if k!='html'},fh)
    print(e['id'][:8], e['name'], len(e['html']), 'rev', e['revision'], 'enabled', e['enabled'], 'once', e['loadOnce'], e['category'])
